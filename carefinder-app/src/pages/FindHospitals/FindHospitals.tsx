import HospitalSearch from "@/components/Hospitals/HospitalSearch";
import HospitalSearchResults from "@/components/Hospitals/HospitalSearchResults";
import { useState } from "react";
// create a FindHospitals component
const FindHospitals = () => {
  const [SearchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="my-4 text-2xl font-semibold">
          Find Hospitals around you
        </h1>
        <div>
          <HospitalSearch onSearch={handleSearch} />
          <HospitalSearchResults query={SearchQuery} />
        </div>
      </section>
    </>
  );
};

export default FindHospitals;
