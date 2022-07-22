import { Footer } from "./Footer"
import { Navbar } from "./Header"
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


    return (
        <div>
            <Navbar />

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

            <div>
                <div >
                    <h1 className="bs">BEST SELLER</h1>
                </div>
                <Carousel
                    responsive={best}
                    ssr={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    className="crousel1"
                    rewind={true}
                >
                  <div>
                    <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                  <div>
                  <img className="img1" src="https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"/>
                    <h1 className="latte">SET THE TONE TINTED POWDER</h1>
                    <h3>₹699</h3>
                    <button className="ss">SELECT SHADE</button>
                  </div>
                </Carousel>
            </div>

            <Footer />
        </div>
    )
}