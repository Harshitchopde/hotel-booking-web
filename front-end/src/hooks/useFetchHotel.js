
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/constants"
const useFetchData = (url)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    useEffect(()=>{
        const Fetch = async ()=>{
            try {
                setLoading(true)
                const fetchData = await axios.get(BASE_URL+url);
                console.log(fetchData.data);
                setData(fetchData.data)
        
            } catch (error) {
                setError(error)
            }
            setLoading(false);
        }
        Fetch()
       
    },[]);
    const reFetch = async()=>{
        setLoading(true);
        try {
            const res = await axios.get(BASE_URL+url);
            setData(res.data);
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    return {reFetch,loading,error,data}
}

export default useFetchData;