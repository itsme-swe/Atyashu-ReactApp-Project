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

//1️⃣ Header Component
const Header = () => {

    return (
        <div className="header-section">

            <div className="brand-logo">
                <img className="logo" src="https://s.cafebazaar.ir/images/icons/by.menu.app-9a55c699-3507-4d72-8bf1-c5c97ac962c7_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" />
            </div>

            <div className="nav-items">

                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart <img className="cart"
                     src="https://www.shareicon.net/data/256x256/2015/05/18/40238_basket_512x512.png"/></li>
                </ul>

            </div>

        </div>
    )
};


//🚩 Restaurant Card Component which will be pass inside Body Component
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
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>

            <h3 className="restro-content">{name}</h3>
            <h4 className="restro-content">{cuisines.join(", ")}</h4>
            <h5 className="restro-content">{avgRating}</h5>
            <h5 className="restro-content">{slaString}</h5>

        </div>
    )
}

//🚩 Restaurant List 
const restList = [
    {
        "info": {
                      "id": "45175",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_45175.JPG",
                      "locality": "GT Central",
                      "areaName": "Malviya Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-17 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹159"
                      }
                }
},
    {
        "info": {
            "id": "56623",
            "name": "Anandji Sweets",
            "cloudinaryImageId": "64d8ec906c52b7d62aaa47cd38bab13a",
            "locality": "Sector 1",
            "areaName": "Malviya Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Sweets",
              "Desserts",
              "Snacks",
              "Indian"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "32920",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-16 22:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Mithai.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Snacks.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                        "description": "Delivery!"
                      }
                    },
                    {
                      "attributes": {
                        "imageId": "Rxawards/_CATEGORY-Snacks.png",
                        "description": "Delivery!"
                      }
                    },
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                }
              }
            },
                
                }
},
    {
        "info": {
                      "id": "729690",
                      "name": "GudMishri",
                      "cloudinaryImageId": "20c6e89e00a2268a01d057e64ee1ca5c",
                      "locality": "University Marg",
                      "areaName": "Lal Kothi",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "281854",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-16 22:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                }
},
    {
        "info": {
                      "id": "791987",
                      "name": "Burgrill - The Win Win Burger",
                      "cloudinaryImageId": "f596863116da4b4688b48e813e25000d",
                      "locality": "Raja Park",
                      "areaName": "Raja Park",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "parentId": "302366",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100+",
                      "promoted": true,
                      "adTrackingId": "cid=14912357~p=2~adgrpid=14912357#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=791987~eid=6a6453c5-15c4-47fc-a6b0-26e24c559d21~srvts=1721126006231~collid=45995",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-17 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                }
},
    {
        "info": {
                      "id": "45605",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
                      "locality": "Malviya Nagar",
                      "areaName": "Malviya Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "2456",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-17 02:59:00",
                        "opened": true
                      },
                        
                }
},
{
    "info": {
                      "id": "743253",
                      "name": "JBT- Jaipur Burger Truck",
                      "cloudinaryImageId": "fa4cafa64c73bc8f9530bf89f347b306",
                      "locality": "janpath road",
                      "areaName": "C Scheme",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Burgers",
                        "Pizzas",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.4,
                      "parentId": "13739",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-17 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                        },
                      }
            }
},
{
    "info": {
                      "id": "61900",
                      "name": "Chhabra's Pure Veg",
                      "cloudinaryImageId": "szjeg7uilf8s4npggvg9",
                      "locality": "Valmiki Colony",
                      "areaName": "Jagatpura",
                      "costForTwo": "₹199 for two",
                      "cuisines": [
                        "North Indian",
                        "Thalis",
                        "Indian",
                        "Rajasthani",
                        "Biryani",
                        "Punjabi",
                        "Beverages",
                        "Tandoor",
                        "Snacks"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "230551",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-16 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
            },
}
]

//2️⃣ Body Component
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
}

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