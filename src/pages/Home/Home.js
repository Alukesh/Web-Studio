import React from 'react';
import follow1 from './follow1.png'
import follow2 from './follow2.png'
import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/scss';
import "swiper/css/effect-fade";
import 'swiper/scss/pagination';
import {A11y, EffectFade, Navigation, Mousewheel, Pagination, Scrollbar} from "swiper";
import Contacts from "../Contacts/Contacts";
import Design from "./Design/Design";
import Works from "../Works/Works";

const Home = () => {
    return (
        <div className={'home'}>

            <Swiper
                // install Swiper modules
                modules={[EffectFade, Navigation, Mousewheel, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                effect={"fade"}
                navigation
                // cssMode={true}
                // navigation={true}
                mousewheel={true}
                keyboard={true}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide className={'home__firstPage container'}>
                    <div className="container">
                        <div className="home__firstPage-wrapper">
                            <div className={'home__firstPage-fog1'}/>
                            <div className={'home__firstPage-fog2'}/>
                            <ul>
                                <li className={'home__firstPage-text'}>Lead is a digital innovation studio that
                                    leverages best-in-class strategy, design and development
                                </li>
                            </ul>
                            <h2 className={'home__firstPage-title'}>We rethink <span
                                className={'home__firstPage-title-bot'}>the web</span></h2>
                            <button className={'circleBtn home__firstPage-btn '}>Consultation <span>
                    <svg width="112" height="8" viewBox="0 0 112 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M111.117 4.29008C111.313 4.09481 111.313 3.77823 111.117 3.58297L107.935 0.40099C107.74 0.205727 107.424 0.205727 107.228 0.40099C107.033 0.596252 107.033 0.912834 107.228 1.1081L110.057 3.93652L107.228 6.76495C107.033 6.96021 107.033 7.2768 107.228 7.47206C107.424 7.66732 107.74 7.66732 107.935 7.47206L111.117 4.29008ZM0.128906 4.43652H110.764V3.43652H0.128906V4.43652Z"
                        fill="white"/></svg>
                        </span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide style={{backgroundColor:'rgba(19, 19, 19, 1)'}} className={'home__information'}>
                    <div className="container">
                        <div className="home__information-wrapper">
                            <h2 className={'home__information-title'}>Information about </h2>
                            <div className={'home__information-main'}>
                                <p className={'home__information-text'}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est
                                    laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco labori
                                </p>
                                <button className={'home__information-btn circleBtn'}>Start <br/>project<span>
                    <svg width="112" height="8" viewBox="0 0 112 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M111.117 4.29008C111.313 4.09481 111.313 3.77823 111.117 3.58297L107.935 0.40099C107.74 0.205727 107.424 0.205727 107.228 0.40099C107.033 0.596252 107.033 0.912834 107.228 1.1081L110.057 3.93652L107.228 6.76495C107.033 6.96021 107.033 7.2768 107.228 7.47206C107.424 7.66732 107.74 7.66732 107.935 7.47206L111.117 4.29008ZM0.128906 4.43652H110.764V3.43652H0.128906V4.43652Z"
                        fill="white"/></svg>
                        </span></button>
                            </div>
                            <div className={'home__information-links'}>
                                <p className={'home__information-follow'}>Follow us</p>
                                <div className={'home__information-icons'}>
                                    <a href="#"><img src={follow1} alt=""/></a>
                                    <a href="#"><img src={follow2} alt=""/></a>
                                    <a href="#">
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M26 22C26 24.2092 24.2092 26 22 26C19.7908 26 18 24.2092 18 22C18 19.7908 19.7908 18 22 18C24.2092 18 26 19.7908 26 22Z"
                                                fill="white"/>
                                            <path
                                                d="M31.4844 14.9463C31.2792 14.3902 30.9518 13.8868 30.5263 13.4737C30.1132 13.0482 29.6101 12.7208 29.0537 12.5156C28.6024 12.3403 27.9244 12.1317 26.6757 12.0749C25.3249 12.0133 24.9199 12 21.5002 12C18.0801 12 17.6751 12.0129 16.3246 12.0745C15.0759 12.1317 14.3976 12.3403 13.9467 12.5156C13.3902 12.7208 12.8868 13.0482 12.474 13.4737C12.0486 13.8868 11.7212 14.3899 11.5156 14.9463C11.3403 15.3976 11.1317 16.0759 11.0749 17.3246C11.0133 18.6751 11 19.0801 11 22.5002C11 25.9199 11.0133 26.3249 11.0749 27.6757C11.1317 28.9244 11.3403 29.6024 11.5156 30.0537C11.7212 30.6101 12.0482 31.1132 12.4737 31.5263C12.8868 31.9518 13.3899 32.2792 13.9463 32.4844C14.3976 32.66 15.0759 32.8686 16.3246 32.9255C17.6751 32.9871 18.0798 33 21.4998 33C24.9202 33 25.3253 32.9871 26.6754 32.9255C27.9241 32.8686 28.6024 32.66 29.0537 32.4844C30.1707 32.0535 31.0535 31.1707 31.4844 30.0537C31.6597 29.6024 31.8683 28.9244 31.9255 27.6757C31.9871 26.3249 32 25.9199 32 22.5002C32 19.0801 31.9871 18.6751 31.9255 17.3246C31.8686 16.0759 31.66 15.3976 31.4844 14.9463ZM21.5002 29.0766C17.8677 29.0766 14.9231 26.1323 14.9231 22.4998C14.9231 18.8674 17.8677 15.9231 21.5002 15.9231C25.1323 15.9231 28.0769 18.8674 28.0769 22.4998C28.0769 26.1323 25.1323 29.0766 21.5002 29.0766ZM28.3369 17.2001C27.4881 17.2001 26.7999 16.5119 26.7999 15.6631C26.7999 14.8143 27.4881 14.1261 28.3369 14.1261C29.1857 14.1261 29.8739 14.8143 29.8739 15.6631C29.8736 16.5119 29.1857 17.2001 28.3369 17.2001Z"
                                                fill="white"/>
                                            <path
                                                d="M22 0C9.85159 0 0 9.85159 0 22C0 34.1484 9.85159 44 22 44C34.1484 44 44 34.1484 44 22C44 9.85159 34.1484 0 22 0ZM34.5566 27.2083C34.4955 28.5531 34.2817 29.4712 33.9695 30.2748C33.3132 31.9718 31.9718 33.3132 30.2748 33.9695C29.4715 34.2817 28.5531 34.4952 27.2086 34.5566C25.8615 34.618 25.4311 34.6328 22.0003 34.6328C18.5692 34.6328 18.1392 34.618 16.7917 34.5566C15.4473 34.4952 14.5288 34.2817 13.7255 33.9695C12.8822 33.6523 12.1189 33.1551 11.4878 32.5122C10.8452 31.8815 10.3481 31.1178 10.0309 30.2748C9.71866 29.4715 9.50482 28.5531 9.44373 27.2086C9.38162 25.8611 9.36719 25.4308 9.36719 22C9.36719 18.5692 9.38162 18.1389 9.44339 16.7917C9.50449 15.4469 9.71799 14.5288 10.0302 13.7252C10.3474 12.8822 10.8449 12.1185 11.4878 11.4878C12.1185 10.8449 12.8822 10.3477 13.7252 10.0305C14.5288 9.71832 15.4469 9.50482 16.7917 9.44339C18.1389 9.38196 18.5692 9.36719 22 9.36719C25.4308 9.36719 25.8611 9.38196 27.2083 9.44373C28.5531 9.50482 29.4712 9.71832 30.2748 10.0302C31.1178 10.3474 31.8815 10.8449 32.5126 11.4878C33.1551 12.1189 33.6526 12.8822 33.9695 13.7252C34.282 14.5288 34.4955 15.4469 34.5569 16.7917C34.6184 18.1389 34.6328 18.5692 34.6328 22C34.6328 25.4308 34.6184 25.8611 34.5566 27.2083Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide style={{backgroundColor:'rgba(19, 19, 19, 1)'}} className={''}>
                    <Design/>
                </SwiperSlide>

                <SwiperSlide style={{backgroundColor:'rgba(19, 19, 19, 1)'}} className={''}>
                    <Works/>
                </SwiperSlide>



                <SwiperSlide style={{backgroundColor:'rgba(19, 19, 19, 1)'}} className={''}>
                    <Contacts/>
                </SwiperSlide>





            </Swiper>


        </div>
    );
};

export default Home;