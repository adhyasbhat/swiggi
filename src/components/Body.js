   import Resturants from "../utils/ResturantsList";
    import Card from "./Card";
    import Shimmer from "./Shimmer";
    import {useState,useEffect, use} from 'react'

 
   const BodyComponent = () =>{
        const [listOfResturants,setListOfResturants] = useState([])
        useEffect(()=>{
        fetchData();
        },[])
        async function fetchData(){
            try{
                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
                const json = await data.json();
                console.log(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setListOfResturants(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            }
            catch(error){
                console.log(error)
            }
         }
        
        return listOfResturants.length === 0 ? <Shimmer/> :(
            <div className='body'>
                <div onClick={()=>{let filteredResturant = listOfResturants.filter((res)=>res.info.avgRating > 4.5)
                    setListOfResturants(filteredResturant)}}>
                    Filter top resturants
                </div>
                <div className='card-container'>
                    {listOfResturants.map((restaurant) =>(
                        <Card key={restaurant.info.id} resData={restaurant}/>
                    ))}
                </div>
            </div>
        )
    }
    export default BodyComponent;