"use client";

const SearchBar = () => {
  return (
    <div className="flex m-4">
      <input
        type="text"
        placeholder="Search..."
        className="text-xl rounded-md shadow-md text-black p-2"
      />
    </div>
  );
};

export default SearchBar;
