import React, { useState, useEffect } from 'react';
// import { Hospital } from '@/shared/types';


const FindHospitals: React.FC = () => {
  // const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHospitals = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://hospitals-api.vercel.app/');
        if (!response.ok) {
          throw new Error('Failed to fetch hospitals');
        }
        // const data = await response.json();
        // setHospitals(data);
      } catch (error) {
        // setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Find Hospitals</h1>
    </div>
  );
};

export default FindHospitals;
