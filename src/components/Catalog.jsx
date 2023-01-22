import React from 'react';
import search from '../img/searc.png'
import {Link} from 'react-router-dom'
import home_logo from '../img/home_logo.svg'
import game_logo from '../img/game_logo.svg'
import giftcard_logo from '../img/giftcard_logo.svg'
import deals_logo from '../img/deals_logo.svg'
import cart_logo from '../img/cart-logo.svg'
import about_logo from '../img/about_logo.svg'

const Catalog = () => {
    return (
        <div className="catalog">
       <div className="search">
            <input className='input__search' type="search" placeholder='Search...'/>
           <img className='img_search' src={search} alt="" />
           <ul className='categories'>
            <li><img className='link__img' src={home_logo} alt="" /><Link className='link' to="/">Home</Link></li>
            <li><img className='link__img' src={game_logo} alt="" /><Link className='link' to="/game">Game</Link></li>
            <li><img className='link__img' src={giftcard_logo} alt="" /><Link className='link' to="/giftcard">Gift Card</Link></li>
            <li><img className='link__img' src={deals_logo} alt="" /><Link className='link' to="/deals">Deals</Link></li>
            <li><img className='link__img' src={cart_logo} alt="" /> <Link className='link' to="/shopingcart">Cart</Link></li>
            <li><img className='link__img' src={about_logo} alt="" /><Link className='link' to="/about">About</Link></li>
           </ul>
       </div>
    </div>
    );
}

export default Catalog;
