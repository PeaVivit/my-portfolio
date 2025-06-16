import React from 'react';

function Footer() {
  return (
    <footer className=" text-center py-3 mt-5">
      {/* bg-dark text-white */}
      <div className="container">
        <p>© {new Date().getFullYear()} Made By Vivit</p>
      </div>
    </footer>
  );
}

export default Footer;
