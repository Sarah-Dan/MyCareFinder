import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { useHospital } from "../../contexts/HospitalContext";
// create a component for adding a hospital with typescript

const AddHospital = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [hospital, setHospital] = useState<Hospital>({
    name: "",
    address: "",
    phone: "",
    website: "",
    email: "",
    description: "",
    services: "",
    specialties: "",
    insurance: "",
    image: "",
    rating: 0,
    numReviews: 0,
    saved: false,
  });

  // const [error, setError] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);

  // const { addHospital } = useHospital();

  // const handleAddHospital = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await addHospital(hospital);
  //     setLoading(false);
  //     navigate("/find-hospitals");
  //   } catch (e) {
  //     setError(e.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      {/* add hospital page */}
      <div id="add-hospital" className="flex flex-col justify-items items-center mt-20 p-10">
        {/* form */}
        <div className="w-1/2 bg-cf-gray">
            <form className="p-4">
                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="w-full p-3 mb-4 rounded-md text-sm"
                  onChange={(e) =>
                    setHospital({ ...hospital, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 mb-4 rounded-md text-sm"
                  onChange={(e) =>
                    setHospital({ ...hospital, address: e.target.value })
                  }
                />
                <select className="w-full p-3 mb-4 rounded-md text-sm">
                  <option value="services">City</option>
                  <option value="services">Services</option>
                  <option value="services">Services</option>
                  <option value="services">Services</option>
                  </select>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 mb-4 rounded-md text-sm"
                  onChange={(e) =>
                    setHospital({ ...hospital, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="w-full p-3 mb-4 rounded-md text-sm"
                  onChange={(e) =>
                    setHospital({ ...hospital, website: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 mb-4 rounded-md text-sm"
                  onChange={(e) =>
                    setHospital({ ...hospital, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full p-3 mb-4 rounded-md text-sm"
                  onChange={(e) =>
                    setHospital({ ...hospital, description: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Image"
                  className="w-full p-3 mb-4 rounded-md text-sm"
                  onChange={(e) =>
                    setHospital({ ...hospital, image: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-full p-3 my-4 rounded-md bg-cf-blue text-cf-white"
                >
                  Add Hospital
                </button>
                </form>
        </div>
        {/* hospital details */}
      </div>
    </>
  );
};

export default AddHospital;
