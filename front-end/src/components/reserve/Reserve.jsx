import { CancelOutlined, CropSharp } from "@mui/icons-material"
import "./reserve.scss"

const Reserve = ({setOpenModel,userId}) => {
    // setOpenModel(false)
  return (
    <div className="reserve">
      <div className="rContainer" >
        <div className="" onClick={()=>setOpenModel(false)}>
            <CancelOutlined/>
        </div>
        <span>Select your room: </span>
      </div>
    </div>
  )
}

export default Reserve
