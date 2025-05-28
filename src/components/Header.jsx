import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { path: "/", label: "History" },
    { path: "/", label: "Books" },
    { path: "/literature", label: "Literature" },
    { path: "/", label: "About" },
    { path: "/", label: "Contact" },
  ];
  
  return (
    <header className="bg-primary pt-5 sticky top-0 z-50 shadow-md pb-5">
      <div className="text-secondary container mx-auto px-4 text-center">
        {/* Logo/Title */}
        <NavLink 
          to="/" 
          className="py-3 md:py-4 hover:opacity-90 transition-opacity duration-200"
        >
          <h1 className="text-2xl sm:text-3xl font-bold">
            AJIVAK - HISTORY AND LITERATURE
          </h1>
        </NavLink>

        {/* Navigation */}
        <nav className="pb-3 md:pb-0">
          <ul className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 sm:gap-x-4 md:gap-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.path.startsWith('http') ? (
                  <a 
                    href={link.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block py-1 px-2 text-base sm:text-lg hover:underline whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `inline-block py-1 px-2 text-base sm:text-lg whitespace-nowrap ${
                        isActive ? 'font-bold underline' : 'hover:underline'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;