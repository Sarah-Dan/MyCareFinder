import React, { useState, useEffect } from "react";
import HospitalCard from "@/components/Hospitals/HospitalCard";
import { SearchResult } from "@/shared/types";

interface SearchResultsProps {
  query: string;
}

interface PaginationProps {
  resultsPerPage: number;
  totalResults: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  resultsPerPage,
  totalResults,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  // Calculate total number of pages
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  // Generate page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-4">
      <ul className="flex justify-center items-center">
        {pageNumbers.map((pageNumber) => (
          <li
          key={pageNumber}
          className={`mx-1 ${
            pageNumber === currentPage
              ? 'bg-cf-blue text-white'
              : 'bg-gray-200 text-cf-dark-gray'
          } rounded-md px-3 py-1 cursor-pointer`}
        >
          <button onClick={() => paginate(pageNumber)}>{pageNumber}</button>
        </li>
        ))}
      </ul>
    </div>
  );
};

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [searchedHospital, setSearchedHospital] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(5);

  useEffect(() => {
    // Fetch results from API
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then((response) => response.json())

      // set results
      .then((data) => setResults(data))
      .catch((error) => console.error(error));
    setSearchedHospital(true);
  }, [query]);

  useEffect(() => {
    // Filter results based on the query
    const filtered = results.filter(
      (result) =>
        // only show relevant results
        query.length > 0 &&
        result.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [query, results]);

  // index for pagination
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  // change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="text-center">
      {searchedHospital && (
        <>
          <h2 className="text-xl font-semibold text-cf-dark-gray mb-2">List of nearby hospitals</h2>
          {/* {filteredResults.length > 0 ? (
            <> */}
          <p>
            Found {filteredResults.length} hospital(s) in "{query}"
          </p>
          {currentResults.map((result) => (
            <HospitalCard key={result.id} result={result} />
          ))}
          {/* pagination */}
          <div className="flex flex-row">
            <Pagination
              resultsPerPage={resultsPerPage}
              totalResults={filteredResults.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </>
        // ) : (
        // only show this if there are no results
        // and the user has searched for something
        // <p>No results found for "{query}"</p>
      )}
      {/* </> */}
      {/* )} */}
    </div>
  );
};

export default SearchResults;
