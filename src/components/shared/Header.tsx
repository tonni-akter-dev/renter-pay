"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.png";
import { Coin, Dollar, DollarPrimary, HeaderDropdown } from "@/app/utils/Icons";
// import { House, LandlordHouse } from "@/app/utils/Icons";

const Header = () => {
  const pathname = usePathname();

  const currencies = [
    { code: "AUD", symbol: <Dollar />, activeSymbol: <DollarPrimary /> },
    { code: "Coin", symbol: <Coin />, activeSymbol: <Coin /> },
  ];

  // Fix TypeScript error by properly typing the state
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCurrency = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };
  const selectCurrency = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
    setIsCurrencyOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white relative pt-5 ">
      <div className="lg:px-4 py-[18px] h-[66px] lg:pe-0">
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
          <nav className="hidden lg:flex space-x-4 lg:space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-200 ${
                isActive("/")
                  ? "text-primary-500 font-semibold"
                  : "text-neutral-50 font-medium hover:text-primary-500"
              }`}
            >
              Home
            </Link>
            <Link
              href="/rent"
              className={`transition-colors duration-200 ${
                isActive("/rent")
                  ? "text-primary-500 font-semibold"
                  : "text-neutral-50 font-medium hover:text-primary-500"
              }`}
            >
              Rent
            </Link>
            <Link
              href="/blog"
              className={`transition-colors duration-200 ${
                isActive("/blog")
                  ? "text-primary-500 font-semibold"
                  : "text-neutral-50 font-medium hover:text-primary-500"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-primary-500 font-semibold"
                  : "text-neutral-50 font-medium hover:text-primary-500"
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/favourite"
              className={`transition-colors duration-200 ${
                isActive("/favourite")
                  ? "text-primary-500 font-semibold"
                  : "text-neutral-50 font-medium hover:text-primary-500"
              }`}
            >
              Favourite
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCurrency}
                className="flex items-center space-x-1 text-neutral-50 font-medium hover:text-primary-500 focus:outline-none"
              >
                <span className="text-neutral-10 text-base font-medium">
                  {selectedCurrency
                    ? currencies.find((c) => c.code === selectedCurrency)?.code
                    : "Currency"}
                </span>
                <HeaderDropdown />
              </button>
              {isCurrencyOpen && (
                <div className="absolute right-0 mt-2 w-[111px] py-3 px-4 bg-white rounded-md z-10">
                  <div className="py-1">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => selectCurrency(currency.code)}
                        className={`flex gap-2 items-center  w-full text-left p-2 text-base ${
                          selectedCurrency === currency.code
                            ? "bg_gradient rounded-lg text-white font-medium !hover:bg-primary-500"
                            : "text-neutral-50 font-medium "
                        }`}
                      >
                        {selectedCurrency === currency.code
                          ? currency.symbol
                          : currency.activeSymbol}
                        <span> {currency.code}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            <button className="hidden lg:block login_btn bg_gradient text-primary-50 text-base font-medium px-4 py-2 rounded-md h-[46px]  transition-colors duration-200 border border-primary-500 !hover:bg-white hover:text-primary-500 me-0">
              Login Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-neutral-50 font-medium hover:text-primary-500 focus:outline-none"
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
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`transition-colors duration-200 ${
                  isActive("/")
                    ? "text-primary-500 font-semibold"
                    : "text-neutral-50 font-medium hover:text-primary-500"
                }`}
              >
                Home
              </Link>
              <Link
                href="/rent"
                className={`transition-colors duration-200 ${
                  isActive("/rent")
                    ? "text-primary-500 font-semibold"
                    : "text-neutral-50 font-medium hover:text-primary-500"
                }`}
              >
                Rent
              </Link>
              <Link
                href="/blogs"
                className={`transition-colors duration-200 ${
                  isActive("/blogs")
                    ? "text-primary-500 font-semibold"
                    : "text-neutral-50 font-medium hover:text-primary-500"
                }`}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className={`transition-colors duration-200 ${
                  isActive("/contact")
                    ? "text-primary-500 font-semibold"
                    : "text-neutral-50 font-medium hover:text-primary-500"
                }`}
              >
                Contact Us
              </Link>
              <Link
                href="/favourite"
                className={`transition-colors duration-200 ${
                  isActive("/favourite")
                    ? "text-primary-500 font-semibold"
                    : "text-neutral-50 font-medium hover:text-primary-500"
                }`}
              >
                Favourite
              </Link>
              <button className="block lg:hidden login_btn bg_gradient text-primary-50 text-base font-medium px-4 py-2 rounded-md h-[46px]  transition-colors duration-200 border border-primary-500 !hover:bg-white hover:text-primary-500">
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
