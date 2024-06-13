import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import "./login.scss"

import React, { useContext, useState } from 'react'
import { BASE_URL } from "../../constants/constants"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [credentials,setCredentails] = useState({
        username:undefined,
        password:undefined,
    })
    const { user,loading,error,dispatch} = useContext(AuthContext);
    const handleChange = (e)=>{
        setCredentails(prev=>({...prev,[e.target.id]:e.target.value}))
    }
    const navigate = useNavigate();
    const handleClick = async e =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
       try {
            const res = await axios.post(BASE_URL+"/auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            navigate('/')
       } catch (error) {
            dispatch({type:"LOGIN_FAIL",payload:error})
       }

    }
    // console.log("loading : ",loading,user)
  return (
    <div className="login">
        <div className="lContainer">
            <input type="text" id="username" placeholder="Username" className="lInput" onChange={(handleChange)}/>
            <input type="password" id="password" placeholder="Password" className="lInput" onChange={(handleChange)}/>
            <button type="button" disabled={loading} className="submitBtn" onClick={handleClick}>Subimt</button>
            {error!=null && <h1  className="error">{error.message}</h1>}
        </div>
      
    </div>
  )
}

export default Login

