import "./header.scss"
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FlightIcon from '@mui/icons-material/Flight';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import { CalendarMonthOutlined, Person } from "@mui/icons-material";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useContext, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
const Header = ({ type }) => {
    const [dateOpen, setDateOpen] = useState(false);
    const [optionsOpen, setOptionsOpen] = useState(false);
    const {dispatch} = useContext(SearchContext)
    const [options, setOptions] = useState({
        adult: 1,
        childern: 0,
        room: 1
    })
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const {user}= useContext(AuthContext);
    const navigation = useNavigate();
    const [destination, setDestination] = useState();
    const handleSearch = () => {
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}});
        navigation("/hotel", { state: { destination, dates, options } })
    }
    const handleDetailRoom = (name, op) => {
        console.log("run")
        setOptions((prev) => {
            return {
                ...prev, [name]: op === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }
    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer showMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem selected">
                        <AirlineSeatIndividualSuiteIcon />

                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <DirectionsCarIcon />


                        <span>Cars</span>
                    </div>
                    <div className="headerListItem">
                        <AirportShuttleIcon />


                        <span>Flight Car</span>
                    </div>
                    <div className="headerListItem">
                        <FlightIcon />

                        <span>Flight</span>
                    </div>
                </div>


                {type !== "list" &&
                    <><h1 className="headerTitle">Enjoy the life at its fullest as it is last</h1>
                        <div className="headerDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quibusdam voluptatum! Adipisci pariatur eum at.</div>
                      {!user &&  <button className="siginButton">Sigin / Register</button>}

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <AirlineSeatIndividualSuiteIcon className="icon" />
                                <input type="text"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Where are you going ?" />
                            </div>
                            <div className="headerSearchItem">
                                <CalendarMonthOutlined className="icon" />
                                <span onClick={() => setDateOpen(!dateOpen)} className="headerSearchDate">{`${format(dates[0].startDate, "dd/MM/yyyy")} - ${format(dates[0].endDate, "dd/mm/yyyy")}`}</span>
                                {dateOpen && <DateRange
                                    editableDateInputs={true}
                                    className="dateRange"
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <Person className="icon" />
                                <span onClick={() => setOptionsOpen(!optionsOpen)} className="headerSearchPerson">{`${options.adult} Adult ${options.childern} children ${options.room} room`}</span>
                                {optionsOpen && <div className="options">
                                    <div className="optionItem">
                                        <span className="name">Adult</span>
                                        <div className="optionRt">

                                            <button disabled={options.adult <= 1} className="optionBtn" onClick={() => handleDetailRoom("adult", "d")}>-</button>
                                            <span>{options.adult}</span>
                                            <button className="optionBtn" onClick={() => handleDetailRoom("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="name">Children</span>
                                        <div className="optionRt">

                                            <button disabled={options.childern <= 0} className="optionBtn" onClick={() => handleDetailRoom("childern", "d")}>-</button>
                                            <span>{options.childern}</span>
                                            <button className="optionBtn" onClick={() => handleDetailRoom("childern", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="name">Room</span>
                                        <div className="optionRt">

                                            <button disabled={options.room <= 1} className="optionBtn" onClick={() => handleDetailRoom("room", "d")}>-</button>
                                            <span>{options.room}</span>
                                            <button className="optionBtn" onClick={() => handleDetailRoom("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                            <button className="headerSearchButton" onClick={() => handleSearch()}>Search</button>
                        </div></>}



            </div>


        </div>
    )
}

export default Header
