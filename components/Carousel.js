import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from '../styles/Components/Carousel.module.scss';

class HomeCarousel extends Component {
    render() {
        return (
            <div className={styles['carousel-wrapper']}>
                <Carousel 
                    showThumbs={false} 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    interval={8000}
                    transitionTime={700}
                    dynamicHeight={true}
                    showArrows={false}
                    showStatus={false}
                    stopOnHover={false}
                    showIndicators={false}
                >
                    <div>
                        <img src="images/home/dog-og.jpg" />
                    </div>
                    <div>
                        <img src="images/home/autumn-og.jpg" />
                    </div>
                    <div>
                        <img src="images/home/bus-lane-og.jpg" />
                    </div>
                    <div>
                        <img src="images/home/falls-og.jpg" />
                    </div>
                    <div>
                        <img src="images/home/orange-og.jpg" />
                    </div>
                    <div>
                        <img src="images/home/bug-og.jpg" />
                    </div>
                </Carousel>
            </div>
            
        );
    }
};
 
export default HomeCarousel;