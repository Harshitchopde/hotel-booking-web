import "./list.scss"

import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import { useState } from "react"
import { useLocation } from "react-router-dom"


const List = () => {
  const [dateOpen, setDateOpen] = useState(false);
  const location = useLocation();
  // console.log("hdfaksd")

  // console.log(location)
  const [dates, setDates] = useState(location.state.dates)
  const [destination, setDestination] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.options)

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
              <input type="text" placeholder="Name" />
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
                  <input type="text" />
                </li>
                <li className="eachOption">
                  <label>Max price(per night)</label>
                  <input type="text" />
                </li>
                <li className="eachOption">
                  <label>Adult</label>
                  <input type="text" />
                </li>
                <li className="eachOption">
                  <label>Childern</label>
                  <input type="text" />
                </li>
                <li className="eachOption">
                  <label>Room</label>
                  <input type="text" />
                </li>
              </ul>
            </div>
            <button className="searchbtn">Search</button>
       
          </div>
          <div className="listResult"></div>
        </div>

      </div>

    </div>
  )
}

export default List
