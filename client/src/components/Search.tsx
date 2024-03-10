import { ChangeEvent, FC, useState } from "react";

// Defining the props for the SearchBar component
interface SearchBarProps {
  onSearch: (search: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  // State for storing the current search value
  const [searchValue, setSearchValue] = useState("");

  // This function is called whenever the user types in the search field
  const search = (e: ChangeEvent<HTMLInputElement>) => {
    // Get the current value of the input field
    const searchText = e.target.value;
    // Update the searchValue state with the new value
    setSearchValue(searchText);
    // Call the onSearch function passed as a prop with the new value
    onSearch(searchText);
  };

  return (
    <div className="flex justify-normal items-center my-14">
      <input
        type="text"
        placeholder="Type to search..."
        className="text-xl rounded-md shadow-md text-black p-2 w-[20rem]  lg:m-auto sm:w-[30rem] lg:w-[55rem] focus:outline-none"
        // The value of the input field is set to the current value of the searchValue state
        value={searchValue}
        // This function updates the searchValue state and calls the onSearch function passed as a prop
        onChange={search}
      />
    </div>
  );
};

export default SearchBar;
