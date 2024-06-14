import { CancelOutlined, CropSharp } from "@mui/icons-material"
import "./reserve.scss"
import useFetchData from "../../hooks/useFetchHotel"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext"
import axios from "axios"
import { BASE_URL } from "../../constants/constants"
import { useNavigate } from "react-router-dom"

const Reserve = ({setOpenModel,hotelId}) => {
    // setOpenModel(false)
    const [selected,setSelected]= useState([])
    const {data} = useFetchData(`/hotel/rooms/${hotelId}`)
    // console.log("res : ",data);
    const handleSelected =(e)=>{
      const checked = e.target.checked;
      const value = e.target.value;
      setSelected(checked ? [...selected,value]:selected.filter(item => item!=value))
    }
    const {dates} = useContext(SearchContext);
    // console.log(selected)
    const getDatesInRange =(startDate,endDate)=>{
      const datesList = [];
      const end = new Date(endDate.getTime())
      const date = new Date(startDate.getTime());
      while(date<=end){
        datesList.push(date.getTime());
        date.setDate(date.getDate()+1);
      }
      return datesList;
    }
    // console.log("dd",new Date(dates[0].startDate).getTime())
    const allDates = getDatesInRange(dates[0].startDate,dates[0].endDate)
    const isAvailable = (roomNumber)=>{
        const isFound = roomNumber.unavailableDates.some(((date)=>
          allDates?.includes(new Date(date).getTime())
        ))
        return !isFound;
    }
    const navigate = useNavigate()
    const handleClick = async()=>{
      try {
        await Promise.all(selected.map((roomId=>{
          const res = axios.put(BASE_URL+`/room/availablility/${roomId}`,{dates:allDates})
          // console.log(res)
          return res.dates
        })))
        setOpenModel(false)
        navigate("/")
      } catch (error) {
        throw new Error("custom : ",error)
        
      }
    }
  return (
    <div className="reserve">
      <div className="rContainer" >
        <div className="cross" onClick={()=>setOpenModel(false)}>
            <CancelOutlined/>
        </div>
        <span>Select your room: </span>
        {
          data.map(item=>(
            <div className="rItem">
              <div className="rItemInfo">
                <span className="rTitle">{item.title}</span>
                <span className="rDesc">{item.desc}</span>
                <span className="rMax">Max people : {item.maxPeople}</span>
                <span className="rPrice">Price :{item.price}</span>

              </div>
              <div className="rooms">
              {
                item.roomNumbers?.map((roomNumber)=>(
                  <div className="room">
                    <label>{roomNumber.number}</label>
                    <input type="checkbox"  
                    disabled={!isAvailable(roomNumber)} 
                    onChange={handleSelected} 
                    value={roomNumber._id} />
                  </div>
                ))
              }
              </div>
            </div>
          ))
        }
        <button onClick={handleClick} className="reserve_now">Reserve Now!</button>
      </div>
    </div>
  )
}

export default Reserve
