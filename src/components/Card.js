const Card = (props) =>{
        const { resData} = props
        const {name, cuisines, avgRating,costForTwo,sla} = resData.info
        return (
            <div className='card'>
               <img className='food-img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+resData.info.cloudinaryImageId}/>
                <h4>{name}</h4>
                <h5>{cuisines.join(", ")}</h5>
                <div className=' card-details'>
                <h5>{avgRating} stars</h5>
                <h5>{costForTwo}</h5>
                </div>
                <h5>Delivery {sla.slaString}</h5>

            </div>
        )
    }
    export default Card;