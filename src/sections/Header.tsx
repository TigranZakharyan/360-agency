'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', hash: 'hero' }, 
  { name: 'Team', hash: 'team' },
  { name: 'Portfolio', hash: 'portfolio' },
  { name: 'Plans', hash: 'plans' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-100}
          className="text-2xl font-bold text-gray-800 hover:text-pink-400 transition duration-300 cursor-pointer"
        >
          Logo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.hash}
              smooth={true}
              duration={500}
              offset={item.hash === "hero" ? -100 : 0}
              className="text-gray-600 hover:text-pink-400 transition duration-300 font-medium cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-pink-400 transition"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transform transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}
      >
        <nav className="bg-white shadow-lg rounded-b-2xl border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.hash}
                  className="block text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg px-4 py-3 font-medium transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
