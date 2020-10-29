import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v1/Phase2_Rec_PC_Hero_1x._CB417639218_.jpg"
                alt="slide image"/>

                <div className="home_row">
                    <Product
                        id="76593455"
                        title="The Learn Startup : How Constrant Creates radically Successful Businesses Paperback" price={1250.50} image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"} prating={5} nrating={0}
                    />
                    <Product 
                        id="76593454"
                        title="Kenwood KMix Stand Mixer for Baking, Styling Kitchen Mixer with K-beater" price={14000} image={"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"} prating={4} nrating={1}
                    />
                </div>

                <div className="home_row">
                    <Product 
                        id="76593457"
                        title="Samsung LC49RG90SSUXEN 49' Curved LEDD Gaming Monitot" price={12000} image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"} prating={3} nrating={2} 
                    />
                    <Product 
                        id="76593456"
                        title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric" price={7000} image={"https://m.media-amazon.com/images/I/61WhKTrn3kL._AC_UY218_.jpg"} prating={5} nrating={0}
                    />
                    <Product 
                        id="76593453"
                        title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 512GB) - Space Grey (2nd Generation)" price={121000} image={"https://m.media-amazon.com/images/I/81uZx3TL29L._AC_UY218_.jpg"} prating={5} nrating={0}
                    />
                </div>
                <div className="home_row">
                    <Product 
                        id="76593452"
                        title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL" price={80000} image={"https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY218_.jpg"} prating={5} nrating={0}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home
