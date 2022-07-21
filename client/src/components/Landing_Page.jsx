
import { Footer } from "./Footer";
import { Navbar } from "./Header";

export const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <div id="midDisplay">
            <div className="slideshow__container">
                <div className="mySlides fade">
                    <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/Triple-Treat-HP-Web_1a5d9351-390c-4b35-a8fd-9aa59ff06108.gif"/>
                </div>
    
                <div className="mySlides fade">
                    <img className="img" src="/Header&Footer/img/bannerTop2.PNG"/>
                </div>
    
                <div className="mySlides fade">
                    <img className="img" src="/Header&Footer/img/bannerTop3.PNG"/>
                </div>
    
                <div className="mySlides fade">
                    <img className="img" src="/Header&Footer/img/bannerTop4.PNG"/>
                </div>
    
                <div className="mySlides fade">
                    <img className="img" src="/Header&Footer/img/bannerTop5.PNG"/>
                </div>
                
                <div style="text-align:center">
                  <span className="dot" onclick="currentSlide(1)"></span> 
                  <span className="dot" onclick="currentSlide(2)"></span> 
                  <span className="dot" onclick="currentSlide(3)"></span> 
                  <span className="dot" onclick="currentSlide(4)"></span>
                  <span className="dot" onclick="currentSlide(5)"></span> 
                </div>
            </div>
            <div className="display__Featured">
                <p>FEATURED COLLECTION</p>
                <div className="lineX">
                    <div></div>
                    <div>x</div>
                    <div></div>
                </div>
                <div className="display__Featured__page">
                    <button id="prevBtn"><i className="fas fa-chevron-left"></i></button>
                    <div id="diaplayFData">
                    </div>
                    <button id="nextBtn"><i className="fas fa-chevron-right"></i></button>
                </div>            
            </div>

            <div id="display__Adds"></div> 

            <div className="display__Clearance">
                <p>CLEARANCE</p>
                <div className="lineXClear">
                    <div></div>
                    <div>x</div>
                    <div></div>
                </div>
                <div id="display__Clearance__page">  
                    <div className="clear__Cards">
                        <img className="img" src="${}" alt=""/>
                    </div>  
                </div>            
            </div> 

            <div className="display__Featured">
                <p>JUST IN</p>
                <div className="lineXIn">
                    <div></div>
                    <div>x</div>
                    <div></div>
                </div>
                <div className="display__JustIn__page">
                    <button id="prevBtnIn"><i className="fas fa-chevron-left"></i></button>
                    <div id="diaplayJustInData">
                    </div>
                    <button id="nextBtnIn"><i className="fas fa-chevron-right"></i></button>
                </div>            
            </div>

            <div className="diaplay__DaySpecial">
                <p>VALENTINE'S DAY MAKEUP LOOKS</p>
                <div className="lineX">
                    <div></div>
                    <div>x</div>
                    <div></div>
                </div>
                <div className="slideshow_containerDS">
                    <div className="mySlidesDS fadeDS">
                      <img src="https://cdn.shopify.com/s/files/1/0906/2558/files/Get-the-look-_1920x453_-heartbreaker_71f13d2e-14e5-4040-8015-fd3c2a05c8d6.jpg" style="width:100%"/>
                    </div>
                    
                    <div className="mySlidesDS fadeDS">
                      <img src="https://cdn.shopify.com/s/files/1/0906/2558/files/Get-the-look-_1920x453_-Passionate-pink_cade15c1-d217-477e-a076-b89318cdc1b6.jpg" style="width:100%"/>
                    </div>
                    
                    <div className="mySlidesDS fadeDS">
                      <img src="https://cdn.shopify.com/s/files/1/0906/2558/files/Get-the-look-_1920x453_-2-gold-digger.jpg" style="width:100%"/>
                    </div>
                     
                    <div style="text-align:center">
                      <span className="dotDS" onclick="currentSlideDS(1)"></span> 
                      <span className="dotDS" onclick="currentSlideDS(2)"></span> 
                      <span className="dotDS" onclick="currentSlideDS(3)"></span> 
                    </div>
                  </div>
            </div>

            <div className="display__Skincare">
                <p>SKINCARE BASICS</p>
                <div className="lineXIn">
                    <div></div>
                    <div>x</div>
                    <div></div>
                </div>
                <div className="display__Skincare__page">
                    <button id="prevBtnInSc"><i className="fas fa-chevron-left"></i></button>
                    <div id="diaplaySkincareData"></div>
                    <button id="nextBtnInSc"><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
            
            <div className="display__BestOfYear">
                <p>2020- YEAR IN REVIEW</p>
                <div className="lineXIn">
                    <div></div>
                    <div>x</div>
                    <div></div>
                </div>
                <div id="displayBestYearBanner">
                    <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/YIR_hp_d382eade-af6d-4384-8b01-fe54ea934e6a.jpg" alt="Best Of Year"/>
                </div>
            </div>

            <div className="display__BestOfYear">
                <p>TIPS AND TRICKS</p>
                <div className="displayTips">
                    <div>
                        <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR_Sheet_masks_for_hydrated_skin.jpg" alt="Tips"/>
                    </div>
                    <div>
                        <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/Tips-_-Tricks-1st-tile-banner.jpg" alt="Tips"/>
                    </div>
                    <div>
                        <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/Tips_Tricks.jpg" alt="Tips"/>
                    </div>
                </div>
            </div>
            
            <div className="display__BestOfYear">
                <p>BEST OF THE BEST</p>
                <div className="displayTipsMonth">
                    <div>
                        <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/Best_of_BestArtboard_1_copy_1_741d49fc-2258-48f1-b54e-1780d0a708dc.jpg" alt="Tips"/>
                    </div>
                    <div>
                        <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/Best_of_BestArtboard_1_1_17f7b94d-1a0f-4866-b5ed-f778ccd639cd.jpg" alt="Tips"/>
                    </div>
                    <div>
                        <img className="img" src="https://cdn.shopify.com/s/files/1/0906/2558/files/Best_of_BestArtboard_1_copy_2_1_5efca581-4f18-4aad-b409-e7182ce04ad0.jpg" alt="Tips"/>
                    </div>
                </div>
            </div>

            <div className="display__Explore">
                <p>EXPLORE</p>
                <div className="display__Explore__page">
                    <button id="prevBtnInE"><i className="fas fa-chevron-left"></i></button>
                    <div id="diaplayExpolreData"></div>
                    <button id="nextBtnInSE"><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
        <div id="myModalW" className="modalW">
            <div className="modal-contentW">
                <span className="closeW">&times;</span>
                <div id="wishListPopUpData"></div>
            </div>
        </div>
        <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <div id="modalData"></div>
            </div>
        </div>
            <Footer />
        </div>
    )
}