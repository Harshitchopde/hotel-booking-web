import { da } from "date-fns/locale"
import useFetchData from "../../hooks/useFetchHotel"
import "./propertyList.scss"

const PropertyList = () => {
  const { data,loading,error} = useFetchData("/hotel/countByType")
  console.log("property list ",data)
  return (
   <div className="">
          {
            loading?"Loading...":
            <div className='property'>
              {
                data.map((e,i)=>{
                  return <div className="plItem" key={i} >
                  <img src="https://th.bing.com/th?id=OIP.uBZzLNUexdwwV7S-lX3o0QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" className="plImage" />
                  <h1 className="plTitle">{e?.type}</h1>
                  <h3 className="plNumber">{e?.count} {e?.type}</h3>
                </div>
                })
              }
          </div>
          }
   </div>
  )
}

export default PropertyList
