import React, { useEffect } from "react";
import { searchValue } from "@/stores/store";

const SearchInput = () => {
    useEffect(() => {
        const handleInput = (e) => {
            searchValue.set(e.target.value);
        };

        const searchInput = document.getElementById("searchInput");
        searchInput.addEventListener("input", handleInput);

        return () => {
            searchInput.removeEventListener("input", handleInput);
        };
    }, []);

    return (
        <input
            type="text"
            placeholder="Search posts..."
            className="bg-gray-800 text-white p-3 rounded-lg"
            id="searchInput"
        />
    );
};

export default SearchInput;
