   import Resturants from "../../ResturantsList";
    import Card from "./Card";
   const BodyComponent = () =>{
        return (
            <div className='body'>
                <div>
                    Search
                </div>
                <div className='card-container'>
                    {Resturants.map((restaurant) =>(
                        <Card key={restaurant.info.id} resData={restaurant}/>
                    ))}
                </div>
            </div>
        )
    }
    export default BodyComponent;