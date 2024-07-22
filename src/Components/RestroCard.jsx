import { CDN_URL } from "../Utils/constants";

const RestroCard = (props) => {

    const {restroData} = props;

    const {
        cloudinaryImageId,
        name, 
        cuisines,
        avgRating,
      } = restroData?.info;
    
      const { slaString } = restroData?.info?.sla;


    return (
        <div className="restro-card">

            <img className="restro-logo"
            alt="restaurant-logo" 
            src={ CDN_URL + cloudinaryImageId}/>

            <h3 className="restro-content">{name}</h3>
            <h4 className="restro-content">{cuisines.join(", ")}</h4>
            <h5 className="restro-content">{avgRating}</h5>
            <h5 className="restro-content">{slaString}</h5>

        </div>
    )
};

export default RestroCard;