import Image from "next/image";
import React from "react";
import coin from "../../../public/coin.png";

// Chevron Down Icon (your original SVG)
export const HeaderDropdown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

// header
export const Dollar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.5017 0.917969C5.48484 0.917969 1.41797 4.98484 1.41797 10.0017C1.41797 15.0186 5.48484 19.0855 10.5017 19.0855C15.5186 19.0855 19.5855 15.0186 19.5855 10.0017C19.5855 4.98484 15.5186 0.917969 10.5017 0.917969ZM11.2861 14.9267V16.2061H10.0623V14.9411C8.05422 14.6661 7.17484 13.0161 7.17484 13.0161L8.42484 11.9705C8.42484 11.9705 9.22297 13.3598 10.6667 13.3598C11.4642 13.3598 12.0692 12.933 12.0692 12.2036C12.0692 10.4986 7.47547 10.7055 7.47547 7.54234C7.47547 6.16734 8.56297 5.17672 10.0617 4.94234V3.66422H11.2855V4.94234C12.3305 5.07984 13.568 5.62984 13.568 6.81297V7.72047H11.9455V7.28047C11.9455 6.82672 11.3673 6.52422 10.7205 6.52422C9.89547 6.52422 9.29109 6.93672 9.29109 7.51422C9.29109 9.26047 13.8848 8.83422 13.8848 12.1486C13.8848 13.5111 12.8673 14.6923 11.2861 14.9267Z" fill="white"/>
</svg>
);
export const DollarPrimary = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.5017 0.917969C5.48484 0.917969 1.41797 4.98484 1.41797 10.0017C1.41797 15.0186 5.48484 19.0855 10.5017 19.0855C15.5186 19.0855 19.5855 15.0186 19.5855 10.0017C19.5855 4.98484 15.5186 0.917969 10.5017 0.917969ZM11.2861 14.9267V16.2061H10.0623V14.9411C8.05422 14.6661 7.17484 13.0161 7.17484 13.0161L8.42484 11.9705C8.42484 11.9705 9.22297 13.3598 10.6667 13.3598C11.4642 13.3598 12.0692 12.933 12.0692 12.2036C12.0692 10.4986 7.47547 10.7055 7.47547 7.54234C7.47547 6.16734 8.56297 5.17672 10.0617 4.94234V3.66422H11.2855V4.94234C12.3305 5.07984 13.568 5.62984 13.568 6.81297V7.72047H11.9455V7.28047C11.9455 6.82672 11.3673 6.52422 10.7205 6.52422C9.89547 6.52422 9.29109 6.93672 9.29109 7.51422C9.29109 9.26047 13.8848 8.83422 13.8848 12.1486C13.8848 13.5111 12.8673 14.6923 11.2861 14.9267Z" fill="#94065C"/>
</svg>
);

// header
export const Coin = () => (
  <Image className="size-5" src={coin} alt="" />
);

// User Icon (for Agent)
export const User = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
      stroke="#6c0443"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke="#6c0443"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Tools Icon (for Service Vendor - wrench)
export const Tools = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M14.8284 14.8284L16.2426 16.2426M16.2426 16.2426L12 20.4853M16.2426 16.2426L20.4853 12M16.2426 16.2426L13.1716 13.1716"
      stroke="#6c0443"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 15H5C4.44772 15 4 14.5523 4 14V10C4 9.44772 4.44772 9 5 9H9C9.55228 9 10 9.44772 10 10V14C10 14.5523 9.55228 15 9 15Z"
      stroke="#6c0443"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
