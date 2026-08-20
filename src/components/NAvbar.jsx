"use client";
import Container from "./Continer";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow-md">
      <nav className="w-full border-b bg-white">
        <Container>
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-yellow-600"
              onClick={closeMenu}
            >
              UmarBEK
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="/"
                className="font-medium text-gray-700 transition hover:text-yellow-600"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="font-medium text-gray-700 transition hover:text-yellow-600"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="font-medium text-gray-700 transition hover:text-yellow-600"
              >
                Contact
              </Link>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              aria-label="Open menu"
            >
              {isOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="border-t bg-white md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 font-medium text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 font-medium text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 font-medium text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Container>
      </nav>
    </header>
  );
}
