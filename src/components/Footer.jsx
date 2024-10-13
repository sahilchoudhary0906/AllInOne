// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p className="text-xs">
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
          <a href="/terms" className="text-gray-400 hover:text-white"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
