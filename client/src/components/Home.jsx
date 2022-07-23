import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/crousel1.css';

export const Home = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const best = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const beauty_tips = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const hot_deals = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const newly_launched = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    
    const super_savers = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const top_picks_of_the_week = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div>
            

            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                showDots={true}
                ssr={true}
                customTransition="all .5"
                transitionDuration={500}
                className="crousel1"
                rewind={true}
            >
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/9e904c5f-acaf-422a-956e-f91353fc3d09.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/cab9a296-0188-45c0-903a-c2da1c84fdbb.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg" />
            </Carousel>

            <div>
                <div >
                    <h1 className="ryf">REFER YOUR FRIENDS</h1>
                </div>
                <div>
                    <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/b7d9027a-a2c1-442e-a804-424d703a64d3.jpg" />
                </div>
            </div>

            <div className='bs-container'>
                <div >
                    <h1 className="bs">BEST SELLER</h1>
                </div>
                <Carousel
                    responsive={best}
                    ssr={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    className="crousel2"
                    rewind={true}
                >
                  <div className='content-div'>
                    <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3 className='rs'>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141"/>
                    <h1 className="latte">LIP ZIP MATTE TOPPER</h1>
                    <h3 className='rs'>₹499</h3>
                    <button className="ss">ADD TO CART</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232"/>
                    <h1 className="latte">MATTE AS HELL CRAYON LIPSTICK</h1>
                    <h3 className='rs'>₹799</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412"/>
                    <h1 className="latte">TIPSY LIPS MOSTURIZING BALM</h1>
                    <h3 className='rs'>₹199</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711"/>
                    <h1 className="latte">KOHL OF HONOUR NTENSE KAJALS</h1>
                    <h3 className='rs'>₹249</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559"/>
                    <h1 className="latte">BLEND THE RULES EYESHADOW PALETTE</h1>
                    <h3 className='rs'>₹1199</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199"/>
                    <h1 className="latte">ALL SET TO GO BANANA POWDER</h1>
                    <h3 className='rs'>₹599</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607"/>
                    <h1 className="latte">CONTOUR DE FORCE FACE PALLETE</h1>
                    <h3 className='rs'>₹799</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                </Carousel>
            </div>

           <div>
           <div >
                    <h1 className="quick_tips">QUICK BEAUTY TIPS WITH SUGAR</h1>
                </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                showDots={true}
                ssr={true}
                customTransition="all .5"
                transitionDuration={500}
                className="crousel3"
                rewind={true}
            >
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/36e44ab4-2b5b-4b5c-b35a-fb56a9c59f1a.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg" />
            </Carousel>
            </div>

           <div>
           <div >
                    <h1 className="hot_deals">HOT DEALS</h1>
           </div>
            <Carousel
                responsive={hot_deals}
                autoPlay={true}
                autoPlaySpeed={2000}
                showDots={true}
                ssr={true}
                customTransition="all .5"
                transitionDuration={500}
                className="crousel4"
                rewind={true}
            >
                <img className='Img' src="https://d32baadbbpueqt.cloudfront.net/Homepage/28145587-09a2-46bc-b4a6-914849ca8562.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/b8278548-ed11-44b4-9818-25c5146c604d.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/7145deaa-8296-49ba-9964-061fded28226.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/2cd03446-33d8-47df-982a-3991ac582be1.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/d81e88d8-712e-4e18-90f2-93bd27236050.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/7b817474-27aa-4c69-816d-960bfbc1d2a9.jpg" />
            </Carousel>
            </div>

            <div>
           <div >
                <h1 className="newly_launched">NEWLY LAUNCHED</h1>
           </div>
           <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                showDots={true}
                ssr={true}
                customTransition="all .5"
                transitionDuration={500}
                className="crousel5"
                rewind={true}
            >
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg" />
                <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg" />
            </Carousel>
            </div>

            
            <div className='container'>
                <div >
                    <h1 className="super_savers">SUPER SAVERS</h1>
                </div>
                <Carousel
                    responsive={super_savers}
                    ssr={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    className="crousel6"
                    rewind={true}
                >
                  <div className='content-div'>
                    <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbc3a2d6-9266-467e-a973-017e3c65d5cf.jpg?v=1649433283"/>
                    <h1 className="latte">SHINE & POUT MAKEUP VALUE SET</h1>
                    <h3 className='Ruppes'>₹999 (16% Off)</h3>
                    <button className="ss">SHOP NOW</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814"/>
                    <h1 className="latte">GLAM EYE MAKEUP VALUE SET</h1>
                    <h3 className='Ruppes'>₹1249 (19% Off)</h3>
                    <button className="ss">CHOOSE PRODUCTS</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681"/>
                    <h1 className="latte">SET OF 4 KAJAL SET</h1>
                    <h3 className='Ruppes'>₹799 (19% Off)</h3>
                    <button className="ss">CHOOSE PRODUCTS</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012"/>
                    <h1 className="latte">RED CARPET MAKEUP TRIO</h1>
                    <h3 className='Ruppes'>₹799 (23% Off)</h3>
                    <button className="ss">CHOOSE PRODUCTS</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/Value-set-wbg.jpg?v=1627055238"/>
                    <h1 className="latte">SUNSCREEN + KOHL VALUE SET</h1>
                    <h3 className='Ruppes'>₹549 (38% Off)</h3>
                    <button className="ss">CHOOSE PRODUCTS</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg?v=1619152222"/>
                    <h1 className="latte">LIP BALM + SHEET MASK</h1>
                    <h3 className='Ruppes'>₹299 (14% Off)</h3>
                    <button className="ss">CHOOSE PRODUCTS</button>
                  </div>
                  
                 
                </Carousel>
            </div>

            <div>
           <div >
                    <h1 className="top_picks_of_the_week">TOP PICKS OF THE WEEK</h1>
           </div>
            <Carousel
                responsive={hot_deals}
                autoPlay={true}
                autoPlaySpeed={2000}
                showDots={true}
                ssr={true}
                customTransition="all .5"
                transitionDuration={500}
                className="crousel7"
                rewind={true}
            >
                <img className='Img' src="https://d32baadbbpueqt.cloudfront.net/Homepage/2589c084-0746-47b8-bbea-9150a035ce02.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/1e7e7626-944b-4b79-b60f-4f26e13801ed.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/17a7167c-09e5-4dcb-a73d-f74df79bf03b.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/3cf8cc3a-dff3-4984-88ac-3772b3d402a0.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/ea4d18b1-3c4d-483f-a723-c2c6f0b48e65.jpg" />
                <img className='Img'src="https://d32baadbbpueqt.cloudfront.net/Homepage/0f6acb92-2394-4185-a22a-e3a17252ccbe.jpg" />
            </Carousel>
            </div>

            <div className='container'>
                <div >
                    <h1 className="skincare_basics">SKINCARE BASICS</h1>
                </div>
                <Carousel
                    responsive={super_savers}
                    ssr={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    className="crousel6"
                    rewind={true}
                >
                  <div className='content-div'>
                    <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315"/>
                    <h1 className="latte">COFFEE CULTURE LIP SCRUB</h1>
                    <h3 className='Ruppes'>₹299</h3>
                    <button className="ss">ADD TO CART</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-cleansing-balm-stick-01.jpg?v=1643375708"/>
                    <h1 className="latte">COFFEE CULTURE CLEANSING BALM STICK</h1>
                    <h3 className='Ruppes'>₹699</h3>
                    <button className="ss">ADD TO CART</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/Hyaluronic-Serum-3_1.jpg?v=1626423730"/>
                    <h1 className="latte">AQUAHOLIC HYALURONICS SERUM</h1>
                    <h3 className='Ruppes'>₹499</h3>
                    <button className="ss">ADD TO CART</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702"/>
                    <h1 className="latte">CHEAT SHEET CLARIFYING MASK</h1>
                    <h3 className='Ruppes'>₹99</h3>
                    <button className="ss">ADD TO CART</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647"/>
                    <h1 className="latte">AQUAHOLIC HYALURONICS PRIMER</h1>
                    <h3 className='Ruppes'>₹699</h3>
                    <button className="ss">ADD TO CART</button>
                  </div>
                  <div className='content-div'>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994"/>
                    <h1 className="latte">POWER CLAY MASK STICK</h1>
                    <h3 className='Ruppes'>₹699</h3>
                    <button className="ss">ADD TO CART</button>
                  </div>
                  
                 
                </Carousel>
            </div>


        </div>
    )
}