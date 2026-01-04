import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import {resturantsDetailsUrl} from '../utils/constants'
import { useParams } from "react-router"
const Resturants = () =>{

    const {resid} = useParams()
    console.log(resid)
    const [details,setDetails] = useState([])
    useEffect(()=>{
      fetchResData()
    },[])
    async function fetchResData(){
      try{
          const data = await fetch(resturantsDetailsUrl+"&restaurantId="+resid)
          const json = await data.json()
          console.log(json)
  
      }
      catch(error){
          console.log(error)
      }
    }
return (
<></>
)
}
export default Resturants