import './styles/header.css';

export const Navbar = () => {
    return (
        <div>
            <div id='headerForLargeScreen'>
                <div className="Header">
                    <div className="Header__Logo">
                        <a href="#"><img className="img" src="https://media.sugarcosmetics.com/upload/Logo-static.jpg" alt="Sugar Cosmetics Logo" /></a>
                    </div>
                    <div className="Header__Search">
                        <input id="searchItems" className="Header__Search__inputBox" type="text" placeholder="Search for products" />
                        <p>Search</p>
                    </div>
                    <div className="Header__Login">
                        <a id="loginLink" className="Header__Login__P">Login / Register</a>
                    </div>
                    <div className="Header__LikeCart">
                        <div>
                            <a href="/wishlist/wishlist.html"><i className="far fa-heart"></i></a>
                            <div className="wishlist_active"></div>
                        </div>
                        <div>
                            <a href="/Cart_page/cart.html"><i className="fas fa-shopping-cart"></i></a>
                            <div className="cart_active"></div>
                        </div>
                    </div>
                </div>
                <div className="navBar">
                    <div className="dropdown">
                        <div className="dropbtn">MAKEUP <i className="fas fa-angle-down"></i></div>
                        <div className="navBar__content">
                            <div>
                                <p>LIPS</p>
                                <a href="/Products/lips.html">LIPSTICKS</a>
                                <a href="/Products/lips.html">LIP CARE</a>
                                <a href="/Products/lips.html">LIQUID LIP COLOURS</a>
                                <a href="/Products/lips.html">LIP GLOSS & LINERS</a>
                                <a href="/Products/lips.html">VALUE SETS</a>
                                <a href="/Products/lips.html">GIFTING</a>
                            </div>
                            <div>
                                <p>FACE</p>
                                <a href="/Products/face.html">PRIMERS</a>
                                <a href="/Products/face.html">FOUNDATION</a>
                                <a href="/Products/face.html">POWDER / COMPACT</a>
                                <a href="/Products/face.html">CONCEALERS & CORRECTORS</a>
                                <a href="/Products/face.html">BLUSH</a>
                                <a href="/Products/face.html">HIGHLIGHTERS & CONTOUR</a>
                                <a href="/Products/face.html">BRONZER</a>
                                <a href="/Products/face.html">FACE PALETTES</a>
                                <a href="/Products/face.html">VALUE SETS</a>
                            </div>
                            <div>
                                <p>EYES</p>
                                <a href="/Products/eye.html">EYELINERS</a>
                                <a href="/Products/eye.html">KAJAL</a>
                                <a href="/Products/eye.html">EYEBROWS</a>
                                <a href="/Products/eye.html">EYESHADOWS</a>
                                <a href="/Products/eye.html">MASCARA</a>
                                <a href="/Products/eye.html">VALUE SETS</a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="dropbtn">SKIN <i className="fas fa-angle-down"></i></div>
                        <div className="navBar__content" id="navBar__content1">
                            <div>
                                <a href="">MOISTURIZERS</a>
                                <a href="">MASKS</a>
                                <a href="">SETTING MISTS</a>
                                <a href="">MAKEUP REMOVER</a>
                                <a href="">SKINCARE&COMBOS</a>
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

                    <div className="dropdown">
                        <div className="dropbtn">TRENDING <i className="fas fa-angle-down"></i></div>
                        <div className="navBar__content" id="navBar__content1">
                            <div>
                                <a href="">MINIS SET</a>
                                <a href="">LIMITED EDITION</a>
                                <a href="">NEW LAUNCHES</a>
                                <a href="">VALUE SETS</a>
                                <a href="">GIFTING</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

