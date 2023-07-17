import { BiHome, BiLogOut, BiSearch, BiSave, BiEdit, BiBookAdd } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
// create a Profile component for users
const Profile = () => {
  const { user, signout } = UserAuth();
  const navigate = useNavigate();

  // handle sign out
  const handleSignOut = async () => {
    try {
      await signout();
      navigate("/");
      console.log("signed out successfully");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {/* profile page for users */}
      <div id="profile" className="flex h-screen">
        {/* sidebar */}
        <div className="w-1/4 bg-cf-blue text-cf-white">
          <div className="p-4">
            <h1 className="text-2xl font-bold">CareFinder</h1>

            <nav className="mt-8">
              <ul>
                <li className="p-4 hover:bg-white hover:font-bold hover:text-cf-blue">
                  <BiHome className="inline-block mr-2" />
                  <a href="/">
                  Home
                  </a>
                </li>
                <li className="p-4 hover:bg-white hover:text-cf-blue">
                  <BiEdit className="inline-block mr-2" />
                  Edit Profile
                </li>
                <li className="p-4 hover:bg-white hover:text-cf-blue">
                  <BiSearch className="inline-block mr-2" />
                  <a href="/find-hospitals">
                  Find Hospitals
                  </a>
                </li>
                <li className="p-4 hover:bg-white hover:text-cf-blue">
                  <BiSave className="inline-block mr-2" />
                  <a href="/saved-hospitals">
                  Saved Hospitals
                  </a>
                </li>
                <li className="p-4 hover:bg-white hover:text-cf-blue">
                  <BiBookAdd className="inline-block mr-2" />
                  <a href="/add-hospital">
                  Add a Hospital
                  </a>
                </li>
                
                <li className="p-4 hover:bg-white hover:text-cf-blue">
                  <FiSettings className="inline-block mr-2" />
                  Settings
                </li>
              </ul>
            </nav>
            <button
              className="mt-8 w-full rounded-lg bg-cf-white p-4 text-cf-blue hover:bg-cf-gray hover:font-bold hover:text-cf-blue"
              onClick={handleSignOut}
            ><BiLogOut className="inline-block mr-2 text-lg" />
              Sign Out
            </button>
          </div>
        </div>
        {/* main content */}
        <div className="w-3/4 bg-cf-light-blue p-4 place-items-center">
          <div className="mt-10 flex flex-col items-center">
            <h1 className="mb-4 text-2xl font-bold">Profile Details</h1>
            <div className="rounded-lg bg-white p-6 shadow-md w-full min-w-md">
                <h3 className="text-xl font-bold">User Details</h3>
                <hr className="my-4" />
                {/* display photo */}
                <div className="flex justify-center">
                    <img
                        src={user && user.photoURL}
                        alt="user"
                        className="rounded-full w-1/4"
                    />
                </div>
              <h4>Display name: {user && user.name}</h4>
              <p>User Email: {user && user.email}</p>
              <p>User ID: {user && user.id}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
