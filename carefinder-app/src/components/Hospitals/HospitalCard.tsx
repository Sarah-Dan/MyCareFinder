import { HospitalType } from "@/shared/types"
import { SelectedPage } from "@/shared/types"

type Props = {
  // hospital: ( value : HospitalType) => void;
  hospital : HospitalType
  setSelectedPage: (value: SelectedPage) => void;
}

const HospitalCard = ({ hospital, setSelectedPage }: Props) => {
  return (
    <div className="bg-cf-blue text-cf-light-blue rounded-md flex flex-col justify-center">
      <h2>{hospital.name}</h2>
      <p>{hospital.address}</p>
      <p>{hospital.rating}</p>

      <button onClick={() => setSelectedPage(SelectedPage.Profile)}>View Details</button>
</div>
  )
}

export default HospitalCard