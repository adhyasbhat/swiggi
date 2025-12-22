   import Resturants from "../utils/ResturantsList";
    import Card from "./Card";
    import Shimmer from "./Shimmer";
    import {useState,useEffect, use} from 'react'

 
   const BodyComponent = () =>{
        const [listOfResturants,setListOfResturants] = useState([])
        const [filteredResturants,setFilteredResturants] = useState([])
        const [searchText,setSearchText] = useState("")
        useEffect(()=>{
        fetchData();
        },[])
        async function fetchData(){
            try{
                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
                const json = await data.json();
                console.log(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setListOfResturants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setFilteredResturants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            }
            catch(error){
                console.log(error)
            }
         }
        
        return listOfResturants.length === 0 ? <Shimmer/> :(
            <div className='body'>
                <div className="filter">
                    <div className="filter-text">
                    <input type="text" className="search-bar" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                
                    <button className="serach-btn" onClick={()=>{
                        const searchFilter = listOfResturants.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText)
                        })
                        setFilteredResturants(searchFilter)

                    }}>Search</button>
                    </div>
                    

                <div onClick={()=>{let filteredResturantlist = listOfResturants.filter((res)=>res.info.avgRating > 4.5)
                    setFilteredResturants(filteredResturantlist)}}>
                    Filter top resturants
                </div>
                </div>
                <div className='card-container'>
                    {filteredResturants.map((restaurant) =>(
                        <Card key={restaurant.info.id} resData={restaurant}/>
                    ))}
                </div>
            </div>
        )
    }
    export default BodyComponent;