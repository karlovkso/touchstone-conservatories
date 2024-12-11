import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-cyan-700 text-white p-8">
      <aside>
        <p className="text-xs lg:text-lg">
          Copyright © {new Date().getFullYear()} Touchstone Conservatories
          <br /> All right reserved.
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
