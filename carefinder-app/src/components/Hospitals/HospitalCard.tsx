import { SearchResult } from "@/shared/types";
import { Link } from "react-router-dom";

interface HospitalCardProps {
  result: SearchResult;
}

type Props = {
  result: SearchResult;
};

const HospitalCard = ({ result }: Props) => {
  return (
    <div
      className="m-4 flex flex-col justify-center rounded-lg bg-cf-blues p-6 text-cf-light-blue"
      key={result.id}
    >
      <h3>{result.name}</h3>
      <p>{result.username}</p>
      <p>{result.email}</p>
      {/* <p>{result.id}</p> */}
      {/* <p>{result.address}</p> */}
      <p>{result.city}</p>
      {/* button to see more */}
      <Link 
        to={`/hospital-details/${result.id}`}
      className="my-2 rounded-lg bg-cf-light-blue p-2 text-center font-bold text-cf-dark-gray hover:bg-cf-light-gray hover:text-cf-blue">
        View more
      </Link>
    </div>
  );
};

export default HospitalCard;
