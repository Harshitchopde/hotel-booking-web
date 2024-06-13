import "./hotel.scss"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import useFetchData from "../../hooks/useFetchHotel";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { dayDifference } from "../../constants/functions";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(true);
  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [imageIndex, setImageIndex] = useState(0);
  const {data,loading}=useFetchData(`${location.pathname}`)
  const {dates,options} = useContext(SearchContext)
  const date = dayDifference(dates[0]?.endDate,dates[0]?.startDate)
  const navigation = useNavigate();
  const {user} = useContext(AuthContext);

  const photos = [
    {
      src: "https://th.bing.com/th/id/OIP.xI-aDc7YCXEOXBt7vfQycQHaE3?w=283&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      src: "https://th.bing.com/th/id/OIP.Sh6JA4iWhc0b3jGSRJmv6gHaE7?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      src: "https://th.bing.com/th/id/OIP.2jZnkTdKsliRzkKFoOD5MAHaFF?w=286&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      src: "https://th.bing.com/th/id/OIP.4CfGr8Qt_sVU0b9QcVZO0wHaE6?w=297&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      src: "https://th.bing.com/th/id/OIP.3FR8ljYew4kn-mbWUaTVqAHaGE?w=240&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      src: "https://th.bing.com/th/id/OIP.xI-aDc7YCXEOXBt7vfQycQHaE3?w=283&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
  ]
  const handleOpen = (i) => {
    setImageIndex(i);
    setOpen(true);
  }
  const handleArrow = (direction) => {
    let newIndx;
    if (direction === "l") {
      newIndx = imageIndex === 0 ? 5 : imageIndex - 1;
    }
    else {
      newIndx = imageIndex === 5 ? 0 : imageIndex + 1;
    }
    setImageIndex(newIndx);
  }
  const handleClick = ()=>{
    if(user){

    }else{
      navigation("/login")
    }
  }

  return (
    <div>
      <div className="hotel">
      <Navbar />
      <Header type={"list"} />
      {
        loading?"Loading..."
        :  <div className="hotelContainer">
        {open && <div className="slider">
          <ArrowBackIcon className="back" onClick={() => handleArrow("l")} />
          <ArrowForwardIcon className="forward" onClick={() => handleArrow("r")} />
          <CancelIcon className="close" onClick={() => setOpen(false)} />
          <div className="sliderWrapper">

            <img className="sliderImg" src={data?.photos[imageIndex]} alt="" />

          </div>
        </div>}
        <div className="hotelWrapper">
          <div className="top">
            <strong className="htlTitle">{data?.name}</strong>
            <button className="reserveBtn">Reserve or Book Now!</button>
          </div>
          <span className="htlLocation"><LocationOnIcon className="locationIcon" />{data.city} Bharat</span>
          <span className="htlLocationRlt">Near the ~500 form center</span>
          <span className="htlAdditionalDtl">Book a stay over ₹{data.cheapestRoom} at this property and get a free airport taxi</span>
          <div className="htlImages">

            {data.photos?.map((photo, i) => (
              <div className="htlImageWrapper" key={i}>
                <img className="eachPhoto" onClick={() => handleOpen(i)} src={photo} alt="" />
              </div>
            ))}

          </div>
          <div className="htlDesContainer">
            <div className="htldes">
              <h1 className="htldesTitle">{data.title}</h1>
              <p className="htldesPara">{data.desc}</p>
            </div>
            <div className="htlPrice">
              <h1 className="priceTitle">Perfect for a 9-night stay!</h1>
              <span className="pricedtl">location in the real heart of Mumbai Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <div className="prices">
                <strong>₹{data.cheapestRoom *date*options.room} </strong>
                <span> ({options.room} nights)</span>
              </div>
              <button  onClick={handleClick} className="reserveBtn">Reserve or Book Now!</button>
            </div>
          </div>

        </div>
      </div>
      }
      <MailList />
      <Footer />
    </div>
    {openModel && <Reserve  setOpenModel={setOpenModel} userId={id}/>}
    </div>
  )
}

export default Hotel
