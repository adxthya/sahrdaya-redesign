export default function HomeNavbar() {
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

  return (
    <div className="flex gap-5 bg-[#182668] px-5 md:px-40 py-5 text-white flex-wrap mt-10">
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
  );
}
