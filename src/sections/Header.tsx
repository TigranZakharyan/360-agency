'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', hash: '#hero' }, 
  { name: 'Team', hash: '#team' },
  { name: 'Plans', hash: '#plans' },
  { name: 'Contact', hash: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#hero" className="text-2xl font-bold text-gray-800 hover:text-pink-400 transition duration-300">
          Logo
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.hash} // Use the hash for scrolling
              className="text-gray-600 hover:text-pink-400 transition duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="md:hidden text-gray-800 hover:text-blue-600"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <nav 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'h-auto opacity-100 p-4 border-t border-gray-200' : 'h-0 opacity-0 p-0'
        }`}
      >
        <ul className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.hash}
                className="block text-gray-600 hover:text-blue-600 font-medium py-2"
                onClick={toggleMenu} // Close menu on link click
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;