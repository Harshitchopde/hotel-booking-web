import useFetchData from "../../hooks/useFetchHotel";
import "./featured.scss"

const Featured = () => {
    const {loading,data,error} = useFetchData("/hotel/countByCity?cities=multai,mumbai");
    
  return (
    <div className="featured">
      {loading?"Loading Please wait...": <div className="featuredContainer">
        <div className="featuredItem">
            <img src="https://th.bing.com/th/id/R.f73041fedd5a1f485a4b857aa4c1e443?rik=DzGdEJL2eDrLrw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-V2N7QzZuaso%2fVMGTdlhZmII%2fAAAAAAAAAG8%2fWNw5X8ku7M8%2fs1600%2f28427732.jpg&ehk=kqboZy1TnLszIXlnzuxP8wu0PqeKJ7mS%2fvBDsv5I%2bEM%3d&risl=&pid=ImgRaw&r=0" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>{data[0]?.city}</h1>
                <h2>{data[0]?.number}</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://www.uplarn.com/wp-content/uploads/2019/04/Village-In-Kerala-1.jpg" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>{data[1]?.city}</h1>
                <h2>{data[1]?.number}</h2>
            </div>
        </div>
    
        <div className="featuredItem">
            <img src="https://th.bing.com/th?id=OIP.AI8nsIJnaf2fMyLN9Z-ZGgHaEQ&w=329&h=189&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>{data[2]?.city ? data[2].city:"Other"}</h1>
                <h2>{data[2]?.number? data[2].number:0}</h2>
            </div>
        </div>
       </div>}
      
    </div>
  )
}

export default Featured
