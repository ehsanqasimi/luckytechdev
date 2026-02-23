"use client";

import React from "react";
import {
  Zap,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

import Image from "next/image";

/**
 * Define the structure for the navigation links in the footer columns.
 */
interface FooterLinkItem {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      // { name: "Projects", href: "/projects" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Web Design", href: "/services#services" },
      { name: "SEO Optimization", href: "/services#services" },
      { name: "Maintenance & Support", href: "/services#services" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/contact#faq" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

/**
 * Footer Component
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Company Info / Logo Column (First Column) */}
          <div className="col-span-2 lg:col-span-2 space-y-4 pr-8">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png"
                alt="Lucky Tech Dev Logo"
                width={40}
                height={40}
              />
            </div>
            <p className="text-sm text-gray-600">
              Crafting custom digital solutions that elevate your brand and
              drive measurable results.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-indigo-400" />
                <span>2A Lucy St, Merrylands West, NSW 2160</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0 text-indigo-400" />
                <a
                  href="mailto:info@lucktechdev.com"
                  className="hover:text-indigo-600"
                >
                  info@lucktech.dev
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-indigo-400" />
                <a href="tel:+15551234567" className="hover:text-indigo-600">
                  0435577417
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-md font-semibold text-gray-900 border-b border-indigo-200 pb-1">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {/* Using <a> tags for consistency with the Header.tsx fix */}
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} LuckTechDev. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/ehsanqasimi"
              aria-label="GitHub"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/mohamad-ehsan-qasemi-07529b2ba/"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
