import React from "react";
import "./Main.css";
import Global from "../Global";

function Main() {
  const globalimage = [
    {
        myImage: process.env.PUBLIC_URL + "/image/Services11-a.jpg",

        myTitle: "Ear cleaningTeeth brushing Glands expressed if needed",
    },
    {
        myImage: process.env.PUBLIC_URL + "/image/Services-c.jpg",
        myTitle: "Bath with shampoo & conditionerBrush-out Haircut",
    },
    {
        myImage: process.env.PUBLIC_URL + "/image/Services11-a.jpg",
        myTitle: "Pawpad trimming Sanitary trim Nail trim",
    },
];
    return (
    <div className="main">
        <div className="book-now1">
        <img src={process.env.PUBLIC_URL + "/image/Book-Now.png"} alt="book" />
    </div>

    <div className="hairday">
        <img
        src={
            process.env.PUBLIC_URL + "/image/pawfections-spa-dog-grooming.jpg"
        }
        alt="/"
        />
    </div>

    <div className=" description">
        <h1>
        PAWfection Salon NC is a full-service grooming and pet spa located in
        Raleigh, NC{" "}
        </h1>
        <p className="paw">
        {" "}
        We offer a wide variety of spa services for canines from puppies to
        seniors, from small to extra large including:
        </p>
    </div>

    <div className="flex-container">
        <div className="card1">
        <Global
            myImage={globalimage[0].myImage}
            myTitle={globalimage[0].myTitle}
        ></Global>
        </div>

        <div className="card2">
        <Global
            myImage={globalimage[1].myImage}
            myTitle={globalimage[1].myTitle}
        ></Global>
        </div>
        <div className="card3">
        <Global
            myImage={globalimage[2].myImage}
            myTitle={globalimage[2].myTitle}
        ></Global>
        </div>
    </div>
    </div>
);
}
export default Main;
