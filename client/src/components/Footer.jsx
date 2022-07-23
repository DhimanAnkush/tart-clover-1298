import './styles/footer.css';

export const Footer = () => {
    return (
        <div>
            <div className="Footer">
                <div className="Footer__Logo">
                    <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/Sugr_logo_white-02_600x.png" alt="Sugar Cosmetics Logo" />
                </div>
                <div className="iconBox">
                    <div className="icon"><i className="fa fa-facebook"></i></div>
                    <div className="icon"><i className="fa fa-twitter"></i></div>
                    <div className="icon"><i className="fa fa-envelope"></i></div>
                </div>

                <div className="form">
                    <div id="newsLetter">
                        <strong>SUBSCRIBE TO OUR NEWSLETTER</strong>
                        {/* <div className="dash"></div> */}
                        <div id="newsTextBox">
                            <input className="newsText" type="text" placeholder="Your email address" />
                            <button className="signUpButton">SIGN UP</button>
                        </div>
                    </div>
                    <div id="bannerGetApp">
                        <strong>GET THE NEW SUGAR APP TODAY.</strong>
                        {/* <div className="dash"></div> */}
                        <div className="mobileNum">
                            <p>Tap into a better shopping experience.</p>
                            <div className="glogoBanner">
                                <div><img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/google-play.png?v=1580269780" alt="Google Playstore" /></div>
                                <div><img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/apple-store.png?v=1580269780" alt="Apple AppStore" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="info__1">
                    <strong>INFORMATION</strong>
                    <div className="info_links">
                        <p>Contact Us</p>
                        <p>Store Locator</p>
                        <p>Terms & conditions</p>
                        <p>Returns</p>
                        <p>FAQs</p>
                        <p>About Us</p>
                    </div>
                </div>
                <div className="contact">
                    <div className='contact-info'>
                        <strong><i className="fa fa-mobile-phone"></i>Call us at</strong>
                        <p>1800-209-9933</p>
                        <p id="dateTime">Monday to Friday : 9 AM - 7 PM</p>
                    </div>
                    <div id="spcaeTopBottom">
                        <strong>Support</strong>
                        <p>hello@sugarcosmetics.com</p>
                    </div>

                    <div className="links">
                        <div>
                            <strong>CAREER</strong>
                            <p>careers@sugarcosmetics.com</p>
                        </div>
                        <div>
                            <strong>PRESS & MEDIA</strong>
                            <p>pr@sugarcosmetics.com</p>
                        </div>
                        <div>
                            <strong>INFLUENCER COLLAB</strong>
                            <p>Join Us</p>
                        </div>
                    </div>
                </div>

                <div className="dividePage"></div>
                <div className="copyRight">
                    <p>Copyright © 2020 SUGAR Cosmetics. All rights reserved.</p>
                </div>

            </div>
        </div>
    )
}