import { Link } from "react-router-dom";
import "./searchList.scss"
// https://th.bing.com/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
const SearchList = (props) => {
    const {item} = props;

    return (
        <div className='searchList'>
            <div className="searchImg">
                <img src={item?.photos[0]}
                    className="searchImage" alt="Not Found!"/>
            </div>
            <div className="searchDes">
                <h1 className="desTitle">{item.name}</h1>
                <span className="desdistance">{item?.distance | "500m"} from {item.city}</span>
                <span className="desfree">free airport taxi</span>
                <span className="desextra">{item.desc}</span>
                <span className="desfeature">Entire studio 1 bathroom 21m<sup><small>2</small></sup> 1 full bed</span>
                <span className="descancellation">Free cancellation</span>

                <span className="descancelLater">you  can cancel later</span>
            </div>
            <div className="searchDetail">
              
                    <div className="rating">
                    <h1 className="ratingName">Excellent</h1>
                    <span className="ratingValue">{item?.rating ?item.rating:0}</span>
                </div>
            
                <div className="otherDetail">
                    <span className="dtlPrice">₹{item.cheapestRoom}</span>
                    <span className="dtlPricedtl">includes taxes and fees</span>
                    <Link to={`/hotel/${item._id}`}>
                    <button className="dtlCheckAvail">See Availability</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default SearchList
