"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Careers", link: "#" },
    { name: "Announcements", link: "#" },
    { name: "Grievance", link: "#" },
    { name: "Fee Payment", link: "#" },
    { name: "NIRF", link: "#" },
    { name: "Login", link: "#" },
    { name: "Internal Quality Assurance Cell", link: "#" },
    { name: "Internal Exams Cell", link: "#" },
    { name: "Alumni Portal", link: "#" },
    { name: "Downloads", link: "#" },
    { name: "Admission Registration", link: "#" },
  ];

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 white text-black rounded-md fixed top-4 left-4 z-50"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#182668] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex items-center justify-center`}
      >
        <ul className="space-y-4 text-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="block text-lg font-medium hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
