import Link from "next/link";
import React from "react";
import app from '../../../public/assets/app.png';
import play from '../../../public/assets/play.png';
import facebook from '../../../public/assets/facebook.png';
import yt from '../../../public/assets/yt.png';
import tiktok from '../../../public/assets/tiktok.png';
import instagram from '../../../public/assets/instagram.png';
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className=" text-white py-10 lg:py-[70px]  rounded-tl-[40px] rounded-tr-[40px] mt-20"
      style={{
        background: "linear-gradient(180deg, #251621 0%, #42233A 100%)",
      }}
    >
      <div className="px-4 md:px-4 container_px lg:px-[100px] mx-auto">
        {/* Footer Content */}
        <div className="flex md:flex-row flex-col justify-between gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xl font-medium text-[#FFFFFFB2] hover:text-white transition-colors">
                  Property
                </Link>
              </li>
              <li>
                <a href="#" className="text-xl font-medium text-[#FFFFFFB2] hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>

            {/* App Store Icons */}
            <div className="flex flex-col gap-2.5 mt-8">
              <Link href="#" className="bg-white rounded-xl hover:opacity-80 transition-opacity">
               <Image src={app} alt="" />
              </Link>
              <Link href="#" className="bg-white rounded-xl hover:opacity-80 transition-opacity">
               <Image src={play} alt="" />
              </Link>
            </div>
          </div>

          {/* Middle Section - Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-h4 font-medium mb-1.5">Contact Us</h2>
            <div className="space-y-2 text-center md:text-left">
              <p className="text-xl font-medium text-[#FFFFFFB2] hover:text-white transition-colors">
              
                Burwood VIC 3125
              </p>
              <p className="text-xl font-medium text-[#FFFFFFB2] hover:text-white transition-colors">
                info@renterpay.com
              </p>
              <p className="text-xl font-medium text-[#FFFFFFB2] hover:text-white transition-colors">
                +61 0455 67
              </p>
            </div>
          </div>

          {/* Right Section - Follow Us */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-h4 font-medium mb-4 lg:ms-[90px]">Follow Us</h2>
            <div className="flex flex-col items-start lg:items-end">
              <div className="flex space-x-4 items-end">
              <Link href="#" className="hover:text-purple-300 transition-colors">
               <Image src={facebook} alt="" />
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors">
               <Image src={instagram} alt="" />
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors">
               <Image src={tiktok} alt="" />
              </Link>
              <Link href="#" className="hover:text-purple-300 transition-colors">
               <Image src={yt} alt="" />
              </Link>
            </div>
            <div className="text-[#EEEBED] text-lg mt-2">
              © 2025 RenterPay. All rights reserved.
            </div>
            </div>
          </div>
        </div>

        {/* Copyright - Centered on all devices */}
      </div>
      <div className="px-4 md:px-4 container_px lg:px-[72px] mx-auto">
        <h1 className="footer_text">RenterPay</h1>
      </div>
    </footer>
  );
};

export default Footer;
