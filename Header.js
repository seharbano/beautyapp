import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header(){
return( 
    <>
<div className="Header">
    <img src="https://www.designyourway.net/blog/wp-content/uploads/2019/09/amazon-logo.jpg" className="Header__logo"/>

    <div className="Header__search">
    <input type="text"/>
    <SearchIcon className="Header__searchIcon"/>
</div>
    <div className="Header__nav">
    <div className="Header__option">
        <span className="Header__optionone">Hello Dear</span>
       <a href="http://localhost:3000/Contact" className="Header__optiontwo" >sign in</a>
    </div>
    <div className="Header__option">
        <span className="Header__optionone">Return</span>
        <span className="Header__optiontwo">Order</span>
    </div>
    <div className="Header__option">
        <span className="Header__optionone">Your</span>
        <span className="Header__optiontwo">Prime</span>
    </div>
    <div className="Header__optionBasket">
        <ShoppingCartIcon/>
<span>
        2
    </span>
   
    </div>
        </div>
</div>
<div className="Header__bottom">
    <ul>
        <li>All</li>
        <li>Mobiles</li>
        <li>Mobiles Backcover</li>
        <li>MobilesWatch</li>
        <li>Speaker & Headphones</li>
        <li>Laptop</li>
        <li>Electronics</li>
        <li>Fashion</li>
        </ul>
</div>
<div>
</div>
</>
);
}
export default Header
