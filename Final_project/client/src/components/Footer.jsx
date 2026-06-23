import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              Tour&Travel Explorer
            </h2>
            <p className="mt-3 text-gray-300">
              Discover amazing destinations and plan your next adventure with us.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-green-400">
                  Cart
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-green-400">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-green-400">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Contact Us
            </h3>
            <p className="text-gray-300">
              📧 support@tour&travelexplorer.com
            </p>
            <p className="text-gray-300">
              📞 +91 8967135170
            </p>
            <p className="text-gray-300">
              📍 Kolkata, India
            </p>
          </div>

        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center text-gray-400">
          © 2026 Travel Explorer. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;