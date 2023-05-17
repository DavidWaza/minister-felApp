"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "Biography" },
  { href: "/gallery", label: "Gallery" },
  { href: "/tribute", label: "Tribute" },
];

const BigNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <button
        className="hamburger"
        id="text"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 current-color"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <div
        className={isNavExpanded ? `navigationMenu expanded` : `navigationMenu`}
      >
        <ul className="stroke">
          {links.map(({ href, label }, index) => {
            return (
              <li className="pt-3" key={index + label}>
                <Link
                  href={href}
                  onClick={() => {
                    isNavExpanded && setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default BigNav;
