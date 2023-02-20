import React from 'react';
import {NavLink } from 'react-router-dom';
import { Button } from './Button';
import "./Footer.css";
const Footer = () => {
    return (
        <wrapper>
            <section className="contact-short" >
                <div className="grid grid-two-column" > </div>
               <div><h3>Ready To Get started</h3>
                <h3>Talk to us today</h3></div> 
            <div>
                <Button><NavLink to="http://localhost:3000/Contact">Get Started</NavLink></Button>
            </div>
            </section>
            {/*main Footer*/}
            <footer>
                <div className='container grid grid-three-columns'>
                    <div className='footer-about' >
                        <h3>Amazon Clone</h3>
                        <p>Best service Provide and Customer satisfaction.</p>
                    </div>
                    <div className='footer-subscribe' >
                        <h3>Subscribe to get important update</h3>
                        <form action='https://formspree.io/f/mnqrepob'>
        <input type="email"  name="Email" placeholder="Email" required autocomplete="off"/>&nbsp;&nbsp;&nbsp;&nbsp;
       <Button><input type="submit" value="Submit"/></Button>
                        </form>
                    </div>
                    <div className='footer-social'>
        <h3>follow us</h3> 
                    </div>
                    <div className='callus'>
                        <h3>Call us</h3>
                     {/*<a href="tel:03212250620">03212250620</a>*/}
                    <h3>03212250620</h3>
                </div>
                </div>
                {/*footer Bottom section*/}
                <div className='footer-bottom-section'>
                <hr/>
                <div className='container grid grid-two-rows'>
                <h4>@{new Date().getFullYear}Amazon Clone Sehar Malik.All Rights Reserved</h4>
                </div>
                <div className='myfooter'>
        <p>PRIVACY POLICY</p>
        <p>TERMS & CONDITIONS</p>
        </div>
                </div>
            </footer>
        </wrapper>
          )
        };
    
export default Footer


