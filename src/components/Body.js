   import Resturants from "../utils/ResturantsList";
    import Card from "./Card";
    import {useState} from 'react'

 
   const BodyComponent = () =>{
        const [listOfResturants,setListOfResturants] = useState(Resturants)
        return (
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