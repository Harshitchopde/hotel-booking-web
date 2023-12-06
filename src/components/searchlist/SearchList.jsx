import "./searchList.scss"

const SearchList = () => {
  return (
    <div className='searchList'>
        <div className="searchImg">
            <img src="https://th.bing.com/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            className="searchImage" alt="" />
        </div>
        <div className="searchDes">
            <h1 className="desTitle">Tower Street Apartments</h1>
            <span className="desdistance">500m from india</span>
            <span className="desfree">free airport taxi</span>
            <span className="desextra">Studio Apartment with Air conditioning</span>
            <span className="desfeature">Entire studio 1 bathroom 21m<sup><small>2</small></sup> 1 full bed</span>
            <span className="descancellation">Free cancellation</span>

            <span className="descancelLater">you  can cancel later</span>
        </div>
        <div className="searchDetail">
            <div className="rating">
                <h1 className="ratingName">Excellent</h1>
                <span className="ratingValue">8.9</span>
            </div>
            <div className="otherDetail">
                <span className="dtlPrice">₹999</span>
                <span className="dtlPricedtl">includes taxes and fees</span>
                <button className="dtlCheckAvail">See Availability</button>
            </div>
        </div>
      
    </div>
  )
}

export default SearchList
