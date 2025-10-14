"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
const Header = () => {
  const currencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(null); // Initially null to show "Currency"
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCurrency = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  const selectCurrency = (
    currencyCode: string | React.SetStateAction<null>
  ) => {
    setSelectedCurrency(currencyCode);
    setIsCurrencyOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="">
            <Link
              href="/"
              className="flex items-center gap-1 text-2xl font-bold text-primary-500"
            >
              <Image src={logo} alt="" />
              RenterPay
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/rent"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Rent
            </Link>
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/favourite"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Favourite
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCurrency}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {/* 2. Updated button text to show the symbol or fallback text */}
                <span>
                  {selectedCurrency
                    ? currencies.find((c) => c.code === selectedCurrency)?.code
                    : "Currency"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isCurrencyOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    {/* 3. Updated map to use the new object structure */}
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => selectCurrency(currency.code)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          selectedCurrency === currency.code
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {currency.code}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
              Login Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/rent"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Rent
              </Link>
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/favourite"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Favourite
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-left">
                Login Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
