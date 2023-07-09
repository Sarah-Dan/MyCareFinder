import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Card {
  id: number;
  name: string;
  username: string;
  email: string;
  // address: string;
  // city: string;
  phone: string;
  website: string;
}

interface DetailsParams {
  id: number;
}

const HospitalDetails: React.FC = () => {
  const { id } = useParams<DetailsParams>();
  const [card, setCard] = useState<Card | null>(null);

useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => response.json())
  .then((data) => setCard(data))
  .catch((error) => console.error(error));

}, [id]);

if (!card) {
  return <div>Loading...</div>;
}

  return (
    <div className='flex flex-col items-center  text-black mt-20 mx-auto p-8'>
      <h2 className='text-2xl'>Hospital Details Page</h2>
      <p className='text-base text-cf-dark-gray'>Here you can see more details about the hospital</p>
      <div className='flex flex-col rounded-md my-4 bg-cf-blues text-cf-light-blue p-8'>
      <p>ID: {card.id}</p>
      <h3>Hospital name: {card.name}</h3>
      <p>Address: {card.username}</p>
      <p>Rating: {card.email}</p>
      {/* <p>{result.id}</p> */}
      {/* <p>{result.address}</p> */}
      <p>Website: {card.website}</p>
      <p>Phone: {card.phone}</p>
      <div className='flex w-full justify-center my-4 gap-4'>
        <button className='my-2 rounded-lg bg-cf-light-blue p-2 text-center font-bold text-cf-dark-gray hover:bg-cf-light-gray hover:text-cf-blue'>
          Save
          </button>
        <button className='my-2 rounded-lg bg-cf-light-blue p-2 text-center font-bold text-cf-dark-gray hover:bg-cf-light-gray hover:text-cf-blue'>
         Share
          </button>
      </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
