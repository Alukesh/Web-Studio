import React from 'react';
import brand1 from "../Works/brands/brand1.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, EffectFade, FreeMode, Mousewheel, Navigation, Pagination, Scrollbar} from "swiper";
import Works from "../Works/Works";
import Contacts from "../Contacts/Contacts";

const Prices = () => {
    return (
        <div className={'prices'}>
            <Swiper
                // install Swiper modules
                modules={[EffectFade, Navigation, FreeMode, Mousewheel, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                effect={"fade"}
                navigation
                // cssMode={true}
                // navigation={true}
                mousewheel={true}
                keyboard={true}
                pagination={{clickable: true}}
                // scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide  className={''}>
                    <div  className={"container"}>
                        <div className="portfolio__slide">
                            <h2 className={'portfolio__slide-text'} style={{fontSize: '60px'}}>prices</h2>
                            <h3 className={'portfolio__slide-title'}>Design services</h3>
                            <div className={'prices__design customScroll'}>

                                <Swiper
                                    direction={"vertical"}
                                    slidesPerView={"auto"}
                                    freeMode={true}
                                    scrollbar={true}
                                    mousewheel={true}
                                    modules={[FreeMode, Scrollbar, Mousewheel]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>

                                <div className={'prices__row '}>
                                    <div className={'prices__card'}>
                                        <p className={'prices__card-text'}>Name of the service</p>
                                        <button className={' circleBtn prices__card-btn'}>Start project<span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                        </button>
                                    </div>
                                    <div className={'prices__card-info'}>
                                        <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                        <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris </p>
                                        <span className={'prices__card-info-price'}>100 $</span>
                                    </div>
                                </div>
                                <div className={'prices__row'}>
                                    <div className={'prices__card'}>
                                        <p className={'prices__card-text'}>Name of the service</p>
                                        <button className={' circleBtn prices__card-btn'}>Start project<span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                        </button>
                                    </div>
                                    <div className={'prices__card-info'}>
                                        <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                        <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris </p>
                                        <span className={'prices__card-info-price'}>100 $</span>
                                    </div>
                                </div>
                                <div className={'prices__row'}>
                                    <div className={'prices__card'}>
                                        <p className={'prices__card-text'}>Name of the service</p>
                                        <button className={' circleBtn prices__card-btn'}>Start project<span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                        </button>
                                    </div>
                                    <div className={'prices__card-info'}>
                                        <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                        <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris </p>
                                        <span className={'prices__card-info-price'}>100 $</span>
                                    </div>
                                </div>
                                <div className={'prices__row'}>
                                    <div className={'prices__card'}>
                                        <p className={'prices__card-text'}>Name of the service</p>
                                        <button className={' circleBtn prices__card-btn'}>Start project
                                            <span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                        </button>
                                    </div>
                                    <div className={'prices__card-info'}>
                                        <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                        <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris </p>
                                        <span className={'prices__card-info-price'}>100 $</span>
                                    </div>
                                </div>
                                <div className={'prices__row'}>
                                    <div className={'prices__card'}>
                                        <p className={'prices__card-text'}>Name of the service</p>
                                        <button className={' circleBtn prices__card-btn'}>Start project
                                            <span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                        </button>
                                    </div>
                                    <div className={'prices__card-info'}>
                                        <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                        <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris </p>
                                        <span className={'prices__card-info-price'}>100 $</span>
                                    </div>
                                </div>
                                <div className={'prices__row'}>
                                    <div className={'prices__card'}>
                                        <p className={'prices__card-text'}>Name of the service</p>
                                        <button className={' circleBtn prices__card-btn'}>Start project
                                            <span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                        </button>
                                    </div>
                                    <div className={'prices__card-info'}>
                                        <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                        <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris </p>
                                        <span className={'prices__card-info-price'}>100 $</span>
                                    </div>
                                </div>
                                    </SwiperSlide>
                                </Swiper>

                                <p className={'portfolio__slide-down'}>scroll down</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide  style={{backgroundColor:'rgba(19, 19, 19, 1)'}} className={''}>
                    <div className={"container"} >
                        <div className="portfolio__slide">
                            <h2 className={'portfolio__slide-text'} style={{fontSize: '60px'}}>prices</h2>
                            <h3 className={'portfolio__slide-title'}>technical services</h3>
                            <div className={'prices__design customScroll'}>

                                <Swiper
                                    direction={"vertical"}
                                    slidesPerView={"auto"}
                                    freeMode={true}
                                    scrollbar={true}
                                    mousewheel={true}
                                    modules={[FreeMode, Scrollbar, Mousewheel]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>

                                        <div className={'prices__row '}>
                                            <div className={'prices__card'}>
                                                <p className={'prices__card-text'}>Name of the service</p>
                                                <button className={' circleBtn prices__card-btn'}>Start project<span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                                </button>
                                            </div>
                                            <div className={'prices__card-info'}>
                                                <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                                <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris </p>
                                                <span className={'prices__card-info-price'}>100 $</span>
                                            </div>
                                        </div>
                                        <div className={'prices__row'}>
                                            <div className={'prices__card'}>
                                                <p className={'prices__card-text'}>Name of the service</p>
                                                <button className={' circleBtn prices__card-btn'}>Start project<span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                                </button>
                                            </div>
                                            <div className={'prices__card-info'}>
                                                <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                                <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris </p>
                                                <span className={'prices__card-info-price'}>100 $</span>
                                            </div>
                                        </div>
                                        <div className={'prices__row'}>
                                            <div className={'prices__card'}>
                                                <p className={'prices__card-text'}>Name of the service</p>
                                                <button className={' circleBtn prices__card-btn'}>Start project<span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                                </button>
                                            </div>
                                            <div className={'prices__card-info'}>
                                                <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                                <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris </p>
                                                <span className={'prices__card-info-price'}>100 $</span>
                                            </div>
                                        </div>
                                        <div className={'prices__row'}>
                                            <div className={'prices__card'}>
                                                <p className={'prices__card-text'}>Name of the service</p>
                                                <button className={' circleBtn prices__card-btn'}>Start project
                                                    <span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                                </button>
                                            </div>
                                            <div className={'prices__card-info'}>
                                                <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                                <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris </p>
                                                <span className={'prices__card-info-price'}>100 $</span>
                                            </div>
                                        </div>
                                        <div className={'prices__row'}>
                                            <div className={'prices__card'}>
                                                <p className={'prices__card-text'}>Name of the service</p>
                                                <button className={' circleBtn prices__card-btn'}>Start project
                                                    <span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                                </button>
                                            </div>
                                            <div className={'prices__card-info'}>
                                                <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                                <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris </p>
                                                <span className={'prices__card-info-price'}>100 $</span>
                                            </div>
                                        </div>
                                        <div className={'prices__row'}>
                                            <div className={'prices__card'}>
                                                <p className={'prices__card-text'}>Name of the service</p>
                                                <button className={' circleBtn prices__card-btn'}>Start project
                                                    <span>
                                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z"
                                        fill="black"/></svg></span>
                                                </button>
                                            </div>
                                            <div className={'prices__card-info'}>
                                                <h3 className={'prices__card-info-title'}>Name of the service</h3>
                                                <p className={'prices__card-info-text'}>Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris </p>
                                                <span className={'prices__card-info-price'}>100 $</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                                <p className={'portfolio__slide-down'}>scroll down</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide style={{backgroundColor:'rgba(19, 19, 19, 1)'}} className={''}>
                    <Contacts/>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Prices;