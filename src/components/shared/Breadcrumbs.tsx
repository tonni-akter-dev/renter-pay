"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  items,
  showBackButton = true,
  onBackClick,
}) => {
  const router = useRouter();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      router.back();
    }
  };

  return (
    <div className="flex items-center text-sm md:text-base">
      {showBackButton && (
        <button
          onClick={handleBackClick}
          className="mr-10 flex gap-2 items-center text-xl font-medium text-neutral-10 hover:text-gray-900 transition-colors"
          aria-label="Go back"
        >
          <FaArrowLeft />
          <span className="ml-1">Back</span>
        </button>
      )}

      <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.href && !item.isActive ? (
                <Link
                  href={item.href}
                  className="text-xl font-medium text-neutral-10 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    item.isActive
                      ? "text-black text-xl  font-semibold"
                      : "text-xl font-medium text-neutral-10 hover:text-gray-900"
                  }
                >
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <span className="mx-4 mt-1 text-gray-500">
                  <IoIosArrowForward />
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
