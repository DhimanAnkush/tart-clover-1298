import './styles/header.css';
import {Link, useNavigate} from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import {BsHeartFill} from "react-icons/bs"
import {TbDiscount2} from 'react-icons/tb'
export const Navbar = () => {
    const navigate= useNavigate()
    return (
        <div>
            <div id='headerForLargeScreen'>
                <div className="Header">
                    <div className="Header__Logo">
                        <Link to="/"><img className="img" src="https://media.sugarcosmetics.com/upload/Logo-static.jpg" alt="Sugar Cosmetics Logo" /></Link>
                    </div>
                    <div className="Header__Search">
                        <input id="searchItems" className="Header__Search__inputBox" type="text" placeholder="Search for products" />
                        <p>Search</p>
                    </div>
                    <div className="Header__Login">
                        <FaUserAlt style={{color:"black",fontSize:"20px"}} />
                        <a id="loginLink" className="Header__Login__P">Login / Register</a>
                    </div>
                    <div className="Header__LikeCart">
                        <div>
                            <a href="/wishlist/wishlist.html"><BsHeartFill style={{color:"#495057",fontSize:"16px"}} /></a>
                            {/* <div className="wishlist_active"></div> */}
                        </div>
                        <div>
                            <a href="/Cart_page/cart.html"><FaShoppingBag style={{color:"#495057",fontSize:"16px"}} /></a>
                            {/* <div className="cart_active"></div> */}
                        </div>
                        <div>
                        <TbDiscount2 style={{color:"#495057",fontSize:"20px"}} />
                        </div>
                    </div>
                </div>
                <div className="navBar">
                    <div className="dropdown">
                        <div className="dropbtn" onClick={()=>navigate('/makeup-products')} >MAKEUP <i className="fas fa-angle-down"></i></div>
                        <div className="navBar__content">
                            <div>
                                <p onClick={()=>navigate('/makeup-products/lips')} >LIPS</p>
                                <Link to="/makeup-products/lips">LIPSTICKS</Link>
                                <Link to="/makeup-products/lips">LIP CARE</Link>
                                <Link to="/makeup-products/liquid">LIQUID LIP COLOURS</Link>
                                <Link to="/makeup-products/liners">LIP GLOSS & LINERS</Link>
                                <Link to="/makeup-products/lips">VALUE SETS</Link>
                               
                            </div>
                            <div>
                                <p onClick={()=>navigate('/makeup-products/face')} >FACE</p>
                                <Link to='/makeup-products/face'>PRIMERS</Link>
                                <Link to='/makeup-products/face'>FOUNDATION</Link>
                                <Link to='/makeup-products/face'>POWDER / COMPACT</Link>
                                <Link to='/makeup-products/face'>CONCEALERS & CORRECTORS</Link>
                                <Link to='/makeup-products/face'>BLUSH</Link>
                                <Link to='/makeup-products/face'>VALUE SETS</Link>
                            </div>
                            <div>
                                <p onClick={()=>navigate('/makeup-products/eye')} >EYES</p>
                                <Link to="/makeup-products/eye">EYELINERS</Link>
                                <Link to="/makeup-products/eye">KAJAL</Link>
                                <Link to="/makeup-products/eye">EYEBROWS</Link>
                                <Link to="/makeup-products/eye">MASCARA</Link>
                                <Link to="/makeup-products/eye">VALUE SETS</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropbtn" onClick={()=>navigate("/brush-products")} >BRUSHES<i className="fas fa-angle-down"></i></div>
                        <div className="navBar__content" id="navBar__content1">
                            <div>
                                <Link to="/brush-products/face">FACE BRUSHES</Link>
                                <Link to="/brush-products/eye">EYE  BRUSHES</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropbtn" onClick={()=>navigate("/skincare-products")} >SKINCARE <i className="fas fa-angle-down"></i></div>
                        <div className="navBar__content" id="navBar__content1">
                            <div>
                                <Link to="/skincare-products">MOISTURIZERS</Link>
                                <Link to="/skincare-products">MASKS</Link>
                                <Link to="/skincare-products">SETTING MISTS</Link>
                                <Link to="/skincare-products">MAKEUP REMOVER</Link>
                                <Link to="/skincare-products">SKINCARE&COMBOS</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropbtn" onClick={()=>navigate('/gifting-products')} >GIFTING<i className="fas fa-angle-down"></i></div>
                        <div className="navBar__content" id="navBar__content1">
                            <div>
                                <Link to="/gifting-products">SUGAR MERCH STATION</Link>
                                <Link to="/gifting-products">MAKEUP KITS</Link>
                                <Link to="/gifting-products">BESTSELLERS</Link>
                                <Link to="/gifting-products">VALUE SETS</Link>
                                <Link to="/gifting-products">SUGAR SETS</Link>
                                <Link to="/gifting-products">E-GIFT CARDS</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropbtn">BLOG <i className="fas fa-angle-down"></i></div>
                        <div className="navBar__content" id="navBar__content1">
                            <div>
                                <a href="">FEATURED</a>
                                <a href="">MAKEUP</a>
                                <a href="">SKINCARE</a>
                                <a href="">CARE</a>
                                <a href="">QUIZ</a>
                            </div>
                        </div>
                    </div>

                    <div className="dropbtn">OFFERS</div>

                </div>
            </div>
        </div>
    )
}

