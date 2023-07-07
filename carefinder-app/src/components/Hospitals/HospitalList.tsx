import { Hospital } from '@/shared/types';
// import { useState } from 'react';

interface HospitalListProps {
    hospitals: Hospital[];
  }

const HospitalList: React.FC<HospitalListProps> = ({ hospitals }) => {
    return (
      <div>
        <h2>List of Hospitals</h2>
        {hospitals.map((hospital) => (
          <div key={hospital.id}>
            <h3>{hospital.name}</h3>
            <p>Address: {hospital.address}</p>
            {/* <p>Phone: {hospital.phone}</p> */}
          </div>
        ))}
      </div>
    );
  };
  
  export default HospitalList;

