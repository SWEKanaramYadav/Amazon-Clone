import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
               <div className="header_option">
                    <span className="header_ortionLineOne">Hello Guest</span>
                    <span className="header_ortionLineTwo">Sign In</span>
               </div>
               <div className="header_option">
                    <span className="header_ortionLineOne">Returns</span>
                    <span className="header_ortionLineTwo">& Orders</span>
               </div>
               <div className="header_option">
                    <span className="header_ortionLineOne">Your</span>
                    <span className="header_ortionLineTwo">Prime</span>
               </div>
               <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_ortionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
               </Link>
            </div>  
        </div>
    )
}

export default Header
