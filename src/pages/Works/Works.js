import React from 'react';
import outZone1 from './outzone1.png'
import outZone2 from './outzone2.png'
import outZone3 from './outzone3.png'
import outZone4 from './outzone4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,EffectFade} from 'swiper';

import 'swiper/scss';
import "swiper/css/effect-fade";
import 'swiper/scss/pagination';

const Works = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            effect={"fade"}
            navigation
            // cssMode={true}
            // navigation={true}
            mousewheel={true}
            keyboard={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        <div className={'works'}>
            <div className="portfolio container">
                {/*<h2 className={'portfolio__sideText'}>Portfolio</h2>*/}
                <div className={'portfolio__wrapper'}>
                   <div className={'portfolio__slider'}>
                       <SwiperSlide className={' '}>
                           <div className={'container'}>
                               <div className={'portfolio__slide'}>
                                   <h2 className={'portfolio__slide-text'}>Portfolio</h2>
                                   <div className={'portfolio__slide-card'}>
                                       <img src={outZone1} alt="outZone"/>
                                       <p>OUT ZONE</p>
                                   </div>
                                   <div className={'portfolio__slide-card'}>
                                       <img src={outZone2} alt="outZone"/>
                                       <p>OUT ZONE</p>
                                   </div>
                                   <div className={'portfolio__slide-card'}>
                                       <img src={outZone3} alt="outZone"/>
                                       <p>OUT ZONE</p>
                                   </div>
                                   <div className={'portfolio__slide-card'}>
                                       <img src={outZone4} alt="outZone"/>
                                       <p>OUT ZONE</p>
                                   </div>
                                   <div className={'portfolio__slide-card'}>
                                       <img src={outZone2} alt="outZone"/>
                                       <p>OUT ZONE</p>
                                   </div>
                                   <div className={'portfolio__slide-card'}>
                                       <img src={outZone3} alt="outZone"/>
                                       <p>OUT ZONE</p>
                                   </div>
                               </div>

                           </div>


                       </SwiperSlide>

                       <SwiperSlide style={{backgroundColor:'rgba(19, 19, 19, 1)'}} className="portfolio__slide ">
                           {/*<h2 className={'portfolio__slide-text'}>Our customers</h2>*/}
                           <h3>We have collaborated with brands such as</h3>
                           <div>
                               asasd
                           </div>
                       </SwiperSlide>

                   </div>
                </div>
            </div>
        </div>
        </Swiper>
    );
};

export default Works;