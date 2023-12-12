import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from "../../components/propertyList/PropertyList"

import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty"

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header type={"listt"} />
      <div className="homeContainer">
        <div className="homeThings">


          <Featured />
          <h1>Browser by properties type person</h1>
          <PropertyList />
          <h1>Homes Guest love see the property feature and price</h1>
          <FeaturedProperty />
        </div>
        <MailList />
        <Footer />
      </div>


    </div>
  )
}

export default Home
