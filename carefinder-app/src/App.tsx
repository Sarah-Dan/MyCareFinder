import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import { Home, SignIn, SignUp, FindHospitals, AddHospital } from "@/pages";
import { NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Profile from "./pages/Profile/Profile";
import HospitalDetails from "./components/Hospitals/HospitalDetails";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-cf-gray">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* routes */}
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={<Home setSelectedPage={setSelectedPage} />}
          />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/find-hospitals" element={<FindHospitals />} />
          <Route path="/hospital-details/:id" element={<HospitalDetails />} />
          <Route path="/add-hospital" element={<AddHospital />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
