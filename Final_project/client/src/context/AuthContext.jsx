import React,{createContext,useContext,useState} from 'react'

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [token,setToken] = useState(localStorage.getItem("token") || "");
    const login= (userdata,tokendata) => {
        localStorage.setItem("user",JSON.stringify(userdata));
        localStorage.setItem("token",tokendata);

        setUser(userdata);
        setToken(tokendata);
    }

    const logout= () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setUser(null);
        setToken("");
    }

  return (
  <AuthContext.Provider value={{user,token,login,logout}}>
    {children}
  </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
