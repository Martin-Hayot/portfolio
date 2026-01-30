import React, { useEffect, useState } from "react";
import { searchValue } from "@/stores/store";

const SearchInput = () => {
    const [value, setValue] = useState("");

    useEffect(() => {
        searchValue.set(value);
    }, [value]);

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search posts..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full bg-transparent text-neutral-100 placeholder:text-neutral-500 py-3 px-4 border border-neutral-800 rounded-lg focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-colors"
            />
            {value && (
                <button
                    onClick={() => setValue("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                    aria-label="Clear search"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default SearchInput;
