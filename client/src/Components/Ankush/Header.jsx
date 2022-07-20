import './styles/header.css';

export const Navbar = () => {
    return (
        <div>
            <div id='headerForLargeScreen'>
                <div class="Header">
                    <div class="Header__Logo">
                        <a href="#"><img class="img" src="https://media.sugarcosmetics.com/upload/Logo-static.jpg" alt="Sugar Cosmetics Logo" /></a>
                    </div>
                    <div class="Header__Search">
                        <input id="searchItems" class="Header__Search__inputBox" type="text" placeholder="Search for products" />
                        <p>Search</p>
                    </div>
                    <div class="Header__Login">
                        <a id="loginLink" class="Header__Login__P">Login / Register</a>
                    </div>
                    <div class="Header__LikeCart">
                        <div>
                            <a href="/wishlist/wishlist.html"><i class="far fa-heart"></i></a>
                            <div class="wishlist_active"></div>
                        </div>
                        <div>
                            <a href="/Cart_page/cart.html"><i class="fas fa-shopping-cart"></i></a>
                            <div class="cart_active"></div>
                        </div>
                    </div>
                </div>
                <div class="navBar">
                    <div class="dropdown">
                        <div class="dropbtn">MAKEUP <i class="fas fa-angle-down"></i></div>
                        <div class="navBar__content">
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

                    <div class="dropdown">
                        <div class="dropbtn">SKIN <i class="fas fa-angle-down"></i></div>
                        <div class="navBar__content" id="navBar__content1">
                            <div>
                                <a href="">MOISTURIZERS</a>
                                <a href="">MASKS</a>
                                <a href="">SETTING MISTS</a>
                                <a href="">MAKEUP REMOVER</a>
                                <a href="">SKINCARE&COMBOS</a>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown">
                        <div class="dropbtn">BLOG <i class="fas fa-angle-down"></i></div>
                        <div class="navBar__content" id="navBar__content1">
                            <div>
                                <a href="">FEATURED</a>
                                <a href="">MAKEUP</a>
                                <a href="">SKINCARE</a>
                                <a href="">CARE</a>
                                <a href="">QUIZ</a>
                            </div>
                        </div>
                    </div>

                    <div class="dropbtn">OFFERS</div>

                    <div class="dropdown">
                        <div class="dropbtn">TRENDING <i class="fas fa-angle-down"></i></div>
                        <div class="navBar__content" id="navBar__content1">
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

