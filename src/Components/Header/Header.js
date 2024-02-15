import React from 'react';
import './Header.css';
import logo from '../Images/logo (1).svg'
import img from '../Images/icon-headphone.svg'
import icon from '../Images/icon-hot.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSync, faHeart, faShoppingCart, faUser, faThLarge } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div >
                <div className='border'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ color: '#7E7E7E', fontSize: '13px' }}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav d-flex align-items-center">
                                <a className="nav-item nav-link" href="#">About Us</a>
                                <span className="vertical-line"></span>
                                <a className="nav-item nav-link" href="#">My Account</a>
                                <span className="vertical-line"></span>
                                <a className="nav-item nav-link" href="#">Wishlist</a>
                                <span className="vertical-line"></span>
                                <a className="nav-item nav-link" href="#">Order Tracking</a>
                            </div>
                            <div className="ml-auto d-flex align-items-center">
                                <p className="m-0 mr-3" >Need help? Call Us: <span style={{ color: "#3BB77E", fontWeight: '600' }}>+ 1800 900</span></p>
                                <span className="vertical-line"></span>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    English
                                </a>
                                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Français</a>
                                    <a className="dropdown-item" href="#">Deutsch</a>
                                    <a className="dropdown-item" href="#">Pусский</a>
                                </div>                                 
                                <span className="vertical-line"></span>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    USD
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">INR</a>
                                    <a className="dropdown-item" href="#">MBP</a>
                                    <a className="dropdown-item" href="#">EU</a>
                                </div>
                                <span className="vertical-line"></span>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='border'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
                        <a className="navbar-brand" href="#"><img src={logo} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='d-flex header-style'>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'black' }}>
                                    All Categories
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">x</a>
                                    <a className="dropdown-item" href="#">y</a>
                                    <a className="dropdown-item" href="#">z</a>
                                </div>
                                <form className='searchboxHear' >
                                    <input type="text" placeholder="Search for items..." className='searchbarborder' />
                                    <FontAwesomeIcon icon={faSearch} style={{ color: '#7E7E7E', fontSize: '20px', border: 'no-border', marginLeft: '300px' }} />
                                </form>
                            </div>
                            <ul className="navbar-nav mr-auto heder-icons">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faSync} style={{ color: '#7E7E7E', fontSize: '25px', border: 'no-border' }} />
                                        <span className="circle-badge"><sup>3</sup></span>
                                        Compare</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faHeart} style={{ color: '#7E7E7E', fontSize: '25px' }} />
                                        <span className="circle-badge"><sup>3</sup></span>
                                        Wishlist</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#7E7E7E', fontSize: '25px', border: 'no-border' }} />
                                        <span className="circle-badge"><sup>3</sup></span>
                                        Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faUser} style={{ color: '#7E7E7E', fontSize: '25px' }} />
                                        Account</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='navbar-wrapper'>
                    <div className='border'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-navbar ">
                            <div className='heder3'>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon icon={faThLarge} style={{ color: '#fff ', fontSize: '20px' }} /> Browse
                                    All Categories
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">y</a>
                                    <a className="dropdown-item" href="#">y </a>
                                    <a className="dropdown-item" href="#">z </a>
                                </div>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav linkheaders">
                                    <li className="nav-item active" style={{ display: 'flex' }}>
                                        <img src={icon} />
                                        <a className="nav-link" href="#">Deals</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle Home" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Home
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">y</a>
                                            <a className="dropdown-item" href="#">y </a>
                                            <a className="dropdown-item" href="#">z </a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Shop
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">y</a>
                                            <a className="dropdown-item" href="#">y </a>
                                            <a className="dropdown-item" href="#">z </a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Vendors
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">y</a>
                                            <a className="dropdown-item" href="#">y </a>
                                            <a className="dropdown-item" href="#">z </a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Mega menu
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">y</a>
                                            <a className="dropdown-item" href="#">y </a>
                                            <a className="dropdown-item" href="#">z </a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">y</a>
                                            <a className="dropdown-item" href="#">y </a>
                                            <a className="dropdown-item" href="#">z </a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pages
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">y</a>
                                            <a className="dropdown-item" href="#">y </a>
                                            <a className="dropdown-item" href="#">z </a>
                                        </div>
                                    </li>
                                    <li className="nav-item">

                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                                <div className='supportblock'>
                                    <img src={img} />
                                    <p>
                                        1900 - 888
                                        <span>24/7 Support Center</span>
                                    </p>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

