import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const HospitalSearch: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex flex-col justify-center items-center">
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center
      max-w-3xl mx-auto my-4 w-full bg-cf-light-gray shadow-md rounded-lg border p-2
      "
    >
      <div>
        <input
            placeholder="Search for a hospital"
          type="text"
          value={query}
          onChange={handleInputChange}
          className="bg-transparent w-[300px] sm:w-[400px] text-cf-dark-gray font-[Poppins] focus:outline-none"
        />
      </div>
      <div>
        <button
          placeholder="Search for a hospital"
          type="submit"
          className="rounded-md bg-cf-blue px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          <AiOutlineSearch className="h-5 w-5" />
        </button>
      </div>
    </form>
    </div>
  );
};

export default HospitalSearch;
