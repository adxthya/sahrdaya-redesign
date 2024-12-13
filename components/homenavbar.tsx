"use client";
import { useState, useEffect } from "react";

export default function HomeNavbar() {
  const [isFixed, setIsFixed] = useState(false);

  const navItems = [
    { label: "Home", link: "#" },
    { label: "Vision", link: "#" },
    { label: "About Us", link: "#" },
    { label: "Autonomous", link: "#" },
    { label: "Examination (Autonomous)", link: "#" },
    { label: "Admission", link: "#" },
    { label: "Departments", link: "#" },
    { label: "Centers", link: "#" },
    { label: "Academics", link: "#" },
    { label: "Cells", link: "#" },
    { label: "Training & Placements", link: "#" },
    { label: "Research", link: "#" },
    { label: "Campus", link: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY > 400); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full px-5 md:px-40 py-5 text-white z-10 ${
        isFixed
          ? "md:fixed top-0 left-0 bg-[#182668] shadow-lg"
          : "relative mt-10 bg-[#182668]"
      } transition-all duration-300`}
    >
      <div className="flex justify-center items-center gap-2 md:gap-5 flex-wrap">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out px-3 rounded-lg"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
