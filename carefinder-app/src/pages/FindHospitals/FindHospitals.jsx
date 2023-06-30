import SearchHospital from '../../components/SearchHospital/SearchHospital'
// create a FindHospitals component
const FindHospitals = () => {
  return (
    <>
    <section className='section'>
        <h1>Find Hospitals</h1>
        <SearchHospital />
        <div>
          <p>Select your city to see a list of hospitals around you</p>
          
        </div>
    </section>
    </>
  )
}

export default FindHospitals