/**
 * Major 3 components we'll have:
 * 🔸Header Component
 *      -- Logo
 *      -- Nav items (Home AboutUs Cart)
 * 🔸Body Component
 *      -- Search Bar with search button
 *      -- Restaurant Container
 *          --  Individual Restaurant Cards
 *              🔸Img of restaurant
 *              🔸Name of restaurant
 *              🔸Star rating
 *              🔸Cuisines served by restaurant
 * 🔸Footer Component
 *      -- Copyright
 *      -- Links
 *      -- Address
 *      -- Contact Us
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";




//🚀 Main Container
const AppLayout = () => {
    return (
        <div className="app-container">

            <Header/>

            <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)