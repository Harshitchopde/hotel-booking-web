import useFetchData from "../../hooks/useFetchHotel"
import "./featuredProperty.scss"
const FeaturedProperty = () => {
  const {loading,data,error} = useFetchData("/hotel?featured=true&limit=4")
  console.log("data",data)
  return (
    <div className="featuredp">
      {
        loading?"Loading ...":
        data.map((ele,i)=>{
          return (
            <div className="fpItem" key={i}>
            <img src={ele?.photos[0]} alt="Not Found!" className="fpImage" />
            <span className="fpTitle">{ele.address}</span>
            <span className="fpName">{ele.name}</span>
            <span className="fpPrice">Starting at just ₹{ele.cheapestRoom}</span>
            <div className="rating">
                <span className="ratingNm">{ele.rating | 1}</span>
                <span className="ratingTag">Marvalous</span>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default FeaturedProperty
