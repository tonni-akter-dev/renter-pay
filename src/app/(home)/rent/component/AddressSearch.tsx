"use client";
import { allAddresses } from "@/app/utils/data";
import { Search } from "@/app/utils/Icons";
import { Address } from "@/app/utils/type";
import { useState, useEffect, useRef } from "react";

export default function AddressSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Address[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowResults(true);

    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    setTimeout(() => {
      const filtered = allAddresses.filter((item) =>
        item.address.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);
  };

  const handleSelectAddress = (address: Address) => {
    setSelectedAddress(address);
    setSearchTerm(address.address);
    setShowResults(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setSelectedAddress(null);
  };

  return (
    <div className="search-component">
      <div className="max-w-md mx-auto">
        <div className="overflow-hidden">
          <div className="relative" ref={searchRef}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search />
            </div>
            <input
              type="text"
              className="block w-full p-4 border border-gray-300 rounded-4xl ps-[52px] bg-[#F6F6F6] placeholder-[#42526D] focus:outline-none text-[#42526D]"
              placeholder="Search Address"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => setShowResults(true)}
            />
          </div>
          {showResults && (
            <div className="">
              {isSearching ? (
                <div className="px-4 py-3 text-sm text-gray-500 text-center">
                  Searching...
                </div>
              ) : searchResults.length > 0 ? (
                <ul
                  className="max-h-[117px] overflow-y-auto border border-[#F1F1F2] rounded-xl bg-white mt-2"
                  style={{ boxShadow: "0 8px 28px 0 rgba(20, 20, 43, 0.10)" }}
                >
                  {searchResults.map((result) => (
                    <li
                      key={result.id}
                      className="px-2 py-1 mb-2 text-[#091E42] cursor-pointer transition-colors flex items-start"
                      onClick={() => handleSelectAddress(result)}
                    >
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          {result.address}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : searchTerm ? (
                <div className="px-4 py-3 text-sm text-gray-500 text-center">
                  No results found
                </div>
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500 text-center">
                  Enter an address to search
                </div>
              )}
            </div>
          )}
        </div>
        {selectedAddress && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 mb-1">
              Selected Address:
            </h3>
            <p className="text-sm text-blue-900">{selectedAddress.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}
