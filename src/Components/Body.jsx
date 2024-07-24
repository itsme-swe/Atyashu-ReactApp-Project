import RestroCard from "./RestroCard";
import restList from "../Utils/apiData";
import { useState } from "react";

const Body = () => {

    const [ listOfRestaurants, setListOfRestaurants  ] = useState(restList);
    return (
        <div className="body-container">

            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 3.5)

                setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="restro-Container">

                {listOfRestaurants.map((restaurant) => (
                  < RestroCard key={restaurant.info.id} restroData={restaurant} />
                ))};

            </div>
        </div>
    )
};

export default Body;