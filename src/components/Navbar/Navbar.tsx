"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Corporate Training",
    href: "/corporate_training",
  },
  {
  name: "Manpower",
  href: "/Manpower"
  },
  {
    name: "Placement",
    href: "/placement",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Clients",
    href: "/clients",
  },
];

const coursesDropdown = [
  {
    name: "All Courses",
    href: "/courses",
  },
  {
    name: "Industrial Automation Training",
    href: "/courses/industrial-automation",
  },
  {
    name: "SCADA & HMI",
    href: "/courses/scada-and-hmi",
  },
  {
    name: "VFD Drive Training",
    href: "/courses/vfd-drive-training",
  },
  {
    name: "Electrical Design",
    href: "/courses/electrical-design",
  },
  {
    name: "Industrial IOT Training",
    href: "/courses/industrial-iot-training",
  },
  {
    name: "Servo & Drive System",
    href: "/courses/servo-and-drive-system",
  },
  {
    name: "Panel Design",
    href: "/courses/panel-design",
  },
  {
    name: "PLC Vendor Training",
    href: "/courses/plc-vendor-training",
  },
  {
    name: "Customized Industrial Training",
    href: "/courses/customized-industrial-training",
  },
  {
    name: "Summer/Winter Training",
    href: "/courses/summer-winter-training",
  },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  /* =========================
     CLOSE MENU
  ========================== */

  const closeMenu = () => {
    setOpen(false);
    setCoursesOpen(false);
  };

  /* =========================
     PREVENT BACKGROUND SCROLL
  ========================== */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}

      <div className="bg-white text-gray-700 sticky top-0 z-50 shadow-md">

        <div className="max-w-8xl mx-auto px-6 md:px-10 py-5 md:py-6 flex items-center justify-between">

          {/* =========================
              LOGO
          ========================== */}

          <Link
            href="/"
            onClick={closeMenu}
          >
            <Image
              src="/diacred.png"
              width={150}
              height={50}
              alt="DIAC Logo"
              className="object-contain"
              priority
            />
          </Link>

          {/* =========================
              DESKTOP MENU
          ========================== */}

          <div className="hidden lg:flex items-center gap-10">

            <ul className="flex items-center gap-7 text-lg font-medium">

              {navLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <li
                    key={index}
                    className="relative group"
                  >
                    <Link
                      href={link.href}
                      className="relative pb-1 transition duration-300 hover:text-red-900 flex items-center gap-2"
                    >

                      {link.name === "Home" && Icon ? (
                        <Icon size={22} />
                      ) : (
                        link.name
                      )}

                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-800 transition-all duration-300 group-hover:w-full" />

                    </Link>
                  </li>
                );
              })}

              {/* =========================
                  COURSES DROPDOWN
              ========================== */}

              <li className="relative group">

                <div className="flex items-center gap-1 cursor-pointer pb-1 hover:text-red-900 transition duration-300">

                  Courses

                  <ChevronDown
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />

                </div>

                <ul className="absolute left-0 top-full pt-3 hidden group-hover:block z-50">

                  <div className="bg-white text-black rounded-md w-72 p-2 shadow-lg border border-gray-100">

                    {coursesDropdown.map((course, index) => (

                      <li
                        key={index}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <Link href={course.href}>
                          {course.name}
                        </Link>
                      </li>

                    ))}

                  </div>

                </ul>

              </li>

            </ul>

            {/* DESKTOP ENQUIRY */}

            <Link href="/#contact">

              <button className="px-4 py-3 rounded-md bg-gradient-to-l from-[#801717] to-[#a11c1c] text-white font-semibold hover:bg-red-800 transition duration-300 uppercase">
                Enquiry Now
              </button>

            </Link>

          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="lg:hidden text-[#801717] p-2"
          >
            <Menu size={34} />
          </button>

        </div>

      </div>

      {/* =========================
          MOBILE BACKDROP
      ========================== */}

      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px] lg:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* =========================
          MOBILE SLIDE DRAWER
      ========================== */}

      <aside
        className={`fixed top-0 right-0 z-[70] h-screen w-[85%] max-w-[380px] bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* =========================
            DRAWER HEADER
        ========================== */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">

          <Link
            href="/"
            onClick={closeMenu}
          >
            <Image
              src="/diacred.png"
              width={125}
              height={45}
              alt="DIAC Logo"
              className="object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#801717] hover:text-white transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* =========================
            DRAWER CONTENT
        ========================== */}

        <div className="h-[calc(100vh-86px)] overflow-y-auto px-5 py-6">

          <ul className="space-y-1">

            {/* =========================
                NORMAL NAV LINKS
            ========================== */}

            {navLinks.map((link, index) => {

              const Icon = link.icon;

              return (
                <li key={index}>

                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-700 font-medium hover:bg-red-50 hover:text-[#801717] transition"
                  >

                    {Icon && (
                      <Icon
                        size={20}
                        className="text-[#801717]"
                      />
                    )}

                    <span>
                      {link.name}
                    </span>

                  </Link>

                </li>
              );
            })}

            {/* =========================
                COURSES
            ========================== */}

            <li className="border-t border-gray-100 mt-3 pt-3">

              <button
                type="button"
                onClick={() =>
                  setCoursesOpen(!coursesOpen)
                }
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 font-medium hover:bg-red-50 hover:text-[#801717] transition"
              >

                <span className="flex items-center gap-3">

                  <span className="w-2 h-2 rounded-full bg-[#801717]" />

                  Courses

                </span>

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    coursesOpen
                      ? "rotate-180 text-[#801717]"
                      : ""
                  }`}
                />

              </button>

              {/* COURSES SUBMENU */}

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  coursesOpen
                    ? "max-h-[700px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <div className="ml-4 mt-2 border-l-2 border-red-100 pl-3 space-y-1">

                  {coursesDropdown.map(
                    (course, index) => (

                      <Link
                        key={index}
                        href={course.href}
                        onClick={closeMenu}
                        className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-red-50 hover:text-[#801717] transition"
                      >
                        {course.name}
                      </Link>

                    )
                  )}

                </div>

              </div>

            </li>

          </ul>

          {/* =========================
              ENQUIRY BUTTON
          ========================== */}

          <div className="mt-8 pt-6 border-t border-gray-200">

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="block"
            >

              <button className="w-full bg-gradient-to-r from-[#801717] to-[#a11c1c] text-white py-3.5 rounded-xl font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition">
                Enquiry Now
              </button>

            </Link>

          </div>

        </div>

      </aside>
    </>
  );
}
