import React from 'react';

const Header = () => {
  const navLinks = [
    { href: "#history", label: "History" },
    { href: "#book", label: "Books" },
    { href: "https://hyperion147.github.io/Literature/", label: "Literature" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  
  return (
    <header className="bg-[#335346] text-white py-4 text-center">
      <h1 className="text-3xl font-bold m-5">AJIVAK - HISTORY AND LITERATURE</h1>
      <nav>
        <ul className="flex justify-center space-x-4 mt-3 mb-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-white hover:underline text-xl">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;