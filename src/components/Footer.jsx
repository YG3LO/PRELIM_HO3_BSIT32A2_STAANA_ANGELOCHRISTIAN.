import React from "react";
import "../pages/Footer.css"; // If Footer.css is inside the pages folder

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Awesome App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
