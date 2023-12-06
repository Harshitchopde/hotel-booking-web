import "./mailList.scss"

const MailList = () => {
  return (
    <div className='mailList'>
        <div className="mailContainer">
            <h1 className="mailBoxTitle">Savetime , Save Money ! </h1>
            <span className="mailBoxDes">SignUp and will send the best deal to you</span>
            <div className="mailInfo">
                <input type="email" className="mailInput" placeholder="email@gmail.com" />
                <button className="mailEnterBtn">Suscriber</button>
            </div>
        </div>
      
    </div>
  )
}

export default MailList
