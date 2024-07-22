import RestroCard from "./RestroCard";
import restList from "../Utils/apiData";

const Body = () => {
    return (
        <div className="body-container">

            <div className="search-bar">
                <h4>Search</h4>
            </div>

            <div className="restro-Container">

                {restList.map((restaurant) => (
                  < RestroCard key={restaurant.info.id} restroData={restaurant} />
                ))};

            </div>
        </div>
    )
};

export default Body;