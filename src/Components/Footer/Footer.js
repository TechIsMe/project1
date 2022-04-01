    import React from "react";
    import "./Footer.css";

    function Footer() {
    return (
        <div className="footer">
        <div className="text">
            <hr />
            <p>
            Local friends who are dog owners . . . Pawfections Salon - located on
            Dunn Road in North Raleigh - is open under totally new management.
            Their head groomer Lauren is in charge now and I stopped in today to
            say hello! Sasha will be going to Pawfections in another week for a
            well-needed bath. The new team has things running like clockwork in
            the shop! And Lauren and the other team members have their own dogs
            underfoot who love visiting with the client dogs! Just wanted to share
            this great news. Their new phone # is 919-909-6243. ~ Barbara H.
            </p>
            <hr />
        </div>
        <div className="under">
            <img
            src={process.env.PUBLIC_URL + "/image/PAW-LOGO-colorful.png"}
            alt="paw"
            />
        </div>

        <div className="book-now">
            <img src={process.env.PUBLIC_URL + "/image/Book-Now.png"} alt="book" />

            <p className="info">
            (919)909-6243 | 1540 Dunn Road, Suit 120 | Raleigh,NC27614
            </p>
        </div>

        <div className="green">
            <p>
                
            {" "}
            Copyright 2021 PAWfections Salon NC - Designed and Powered by Print
            and Web Designer Raleigh/Durham
            </p>

        </div>
        </div>
    );
    }

    export default Footer;
