import "./hotel.scss"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
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
  return (
    <div className="hotel">
      <Navbar />
      <Header type={"list"} />

      <div className="hotelContainer">
        {open && <div className="slider">
          <ArrowBackIcon className="back" onClick={() => handleArrow("l")} />
          <ArrowForwardIcon className="forward" onClick={() => handleArrow("r")} />
          <CancelIcon className="close" onClick={() => setOpen(false)} />
          <div className="sliderWrapper">

            <img className="sliderImg" src={photos[imageIndex].src} alt="" />

          </div>
        </div>}
        <div className="hotelWrapper">
          <div className="top">
            <strong className="htlTitle">Taj Hotel</strong>
            <button className="reserveBtn">Reserve or Book Now!</button>
          </div>
          <span className="htlLocation"><LocationOnIcon className="locationIcon" /> Mumbai ,Maharashtra, Bharat</span>
          <span className="htlLocationRlt">Near the ~500m form center</span>
          <span className="htlAdditionalDtl">Book a stay over ₹999 at this property and get a free airport taxi</span>
          <div className="htlImages">

            {photos.map((photo, i) => (
              <div className="htlImageWrapper">
                <img className="eachPhoto" onClick={() => handleOpen(i)} src={photo.src} alt="" />
              </div>
            ))}

          </div>
          <div className="htlDesContainer">


            <div className="htldes">
              <h1 className="htldesTitle">Stay in the heart for ever</h1>
              <p className="htldesPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fugiat quos aperiam debitis dicta esse consectetur ex amet cupiditate beatae, accusamus maiores delectus non ipsum nam obcaecati officiis, aspernatur, provident possimus eum veniam sint. Ipsa quaerat reiciendis, sunt quod ipsum delectus iure dolorem adipisci ducimus? Quos recusandae sed quibusdam ducimus rem expedita dolorem facere adipisci aperiam doloribus. Delectus nihil modi ut adipisci, error doloremque perspiciatis porro distinctio hic reiciendis nulla autem at unde illo aut, quidem odio quaerat atque sunt tempore repellat praesentium ipsam quia velit! Esse ea minus vero voluptatem totam assumenda nobis enim quasi fuga alias! Veniam, aspernatur.</p>
            </div>
            <div className="htlPrice">
              <h1 className="priceTitle">Perfect for a 9-night stay!</h1>
              <span className="pricedtl">location in the real heart of Mumbai Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <div className="prices">
                <strong>₹999    </strong>
                <span> (9 nights)</span>
              </div>
              <button className="reserveBtn">Reserve or Book Now!</button>
            </div>
          </div>

        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel
