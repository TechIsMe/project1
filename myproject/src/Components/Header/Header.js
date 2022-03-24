 import React from 'react';
 import './Header.css';

    function Header() {
    return (
<div>
        <div className='ad'>
        <h1 className='cc'> (919)909-6243 | 1540 Dunn Road, Suit 120 | Raleigh,NC27614</h1>
         </div>
        <div className='navbar'>     
            <div className='container'>
          
                <div className='logo'>
                
                <img src={process.env.PUBLIC_URL + "/image/PAW-logo-2.png"}
            alt="paw" />
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Family Album</a></li>
                        <li><a href="/">Book Now</a></li>
                    </ul>
                    <div class="button">
                        <a href="/">Facebook</a>
                    </div>
                </nav>

        </div>
        </div>
        </div>
    )
    }

    export default Header;