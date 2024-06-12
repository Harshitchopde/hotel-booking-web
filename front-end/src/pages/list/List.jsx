import "./list.scss"

import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { format, min } from "date-fns"
import { DateRange } from "react-date-range"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import SearchList from "../../components/searchlist/SearchList"
import useFetchData from "../../hooks/useFetchHotel"


const List = () => {
  const [dateOpen, setDateOpen] = useState(false);
  const location = useLocation();
  // console.log("hdfaksd")

  // console.log(location)
  const [dates, setDates] = useState(location.state.dates)
  const [destination, setDestination] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.options)
  const [mini,setMini] = useState(0);
  const [maxi,setMaxi] = useState(9999);
  const {data,loading,error,reFetch} = useFetchData(`/hotel?city=${destination}&mini=${mini}&maxi=${maxi}`)
  // console.log("options : ",options)

  const handleSearchClick = (e)=>{
    e.preventDefault();
    reFetch()
  }

  return (

    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1>Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" value={destination} onChange={(e)=>setDestination(e.target.value)} placeholder="Name" />
            </div>
            <div className="listItem">
              <label>Check-in date</label>
              <input type="text" placeholder={`${format(dates[0].startDate, "dd/MM/yyyy")} - ${format(dates[0].endDate, "dd/mm/yyyy")}`} onClick={() => setDateOpen(!dateOpen)} />
              {dateOpen && <DateRange
                editableDateInputs={true}

                onChange={item => setDates([item.selection])}

                ranges={dates}
              />}
            </div>
            <label>Options</label>
            <div className="options">
              <ul className="optionsUl">
                <li className="eachOption">
                  <label>Min price(per night)</label>
                  <input type="text" value={mini} onChange={(e)=>setMini(e.target.value)}/>
                </li>
                <li className="eachOption">
                  <label>Max price(per night)</label>
                  <input type="text" value={maxi} onChange={(e)=>setMaxi(e.target.value)} />
                </li>
                <li className="eachOption">
                  <label>Adult</label>
                  <input type="number" name="adult" value={options.adult}/>
                </li>
                <li className="eachOption">
                  <label>Childern</label>
                  <input type="text" name="childern" value={options.childern} />
                </li>
                <li className="eachOption">
                  <label>Room</label>
                  <input type="text" name="room" value={options.room}  />
                </li>
              </ul>
            </div>
            <button className="searchbtn" onClick={(e)=>handleSearchClick(e)}>Search</button>

          </div>
          <div className="listResult">
            {
              loading?"Loading...": data.map((item)=> <SearchList key={item._id} item={item} />)
            }
          
          </div>
        </div>

      </div>

    </div>
  )
}

export default List
