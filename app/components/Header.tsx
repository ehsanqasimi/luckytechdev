"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Define the interface for a navigation item structure
interface NavItem {
  name: string;
  href: string;
}

// Define the navigation items using the NavItem interface
const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  // { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Define the interface for the NavLink component's props
interface NavLinkProps extends NavItem {
  onClick: () => void;
}

/**
 * NavLink functional component for rendering navigation links with active state.
 */
const NavLink: React.FC<NavLinkProps> = ({ name, href, onClick }) => {
  const pathname = usePathname();

  // Better active detection - exact match for root, startsWith for others
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`
        transition-colors duration-200 font-medium
        block px-3 py-2 text-base rounded-md
        md:inline-block md:px-0 md:py-1 md:text-sm md:rounded-none
        ${
          isActive
            ? "text-indigo-600 bg-indigo-50 md:bg-transparent md:border-b-2 md:border-indigo-600"
            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50 md:hover:bg-transparent md:border-b-2 md:border-transparent md:hover:border-indigo-300"
        }
      `}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

/**
 * Main application component containing the responsive header.
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand Name */}
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-15 w-15 text-indigo-600"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8 h-full">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                name={item.name}
                href={item.href}
                onClick={closeMenu}
              />
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start a Project <ArrowRight size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100 shadow-lg`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 sm:px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              name={item.name}
              href={item.href}
              onClick={closeMenu}
            />
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start a Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
