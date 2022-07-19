import React, {useState} from 'react';
import img1 from "./img1.png";
import img2 from "./img2.png";
import tech1 from "./tech1.jpg";
import tech2 from "./tech2.webp";
import mark1 from "./mark1.jpg";
import search1 from "./search1.jpg";

const Design = () => {
    const [state, setState] = useState('Design');

    return (
        <div>
            <div className={'contact container'}>
                <div className="container">
                    <div className="contact__wrapper">
                        <p className={'aside-text'}>Services</p>
                        <div className={'design__area'}>
                            <ul className={'design__area-list'}>
                                <li className={`design__area-link ${state === 'Design' && 'active'}`} onClick={() => setState('Design')}>Design</li>
                                <li className={`design__area-link ${state === 'Technology' && 'active'}`} onClick={() => setState('Technology')}>Technology</li>
                                <li className={`design__area-link ${state === 'Marketing' && 'active'}`} onClick={() => setState('Marketing')}>Marketing</li>
                                <li className={`design__area-link ${state === 'Research' && 'active'}`} onClick={() => setState('Research')}>Research</li>
                            </ul>
                            <button className={'home__information-btn circleBtn'}>Start <br/>project<span>
                                <svg width="112" height="8" viewBox="0 0 112 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                d="M111.117 4.29008C111.313 4.09481 111.313 3.77823 111.117 3.58297L107.935 0.40099C107.74 0.205727 107.424 0.205727 107.228 0.40099C107.033 0.596252 107.033 0.912834 107.228 1.1081L110.057 3.93652L107.228 6.76495C107.033 6.96021 107.033 7.2768 107.228 7.47206C107.424 7.66732 107.74 7.66732 107.935 7.47206L111.117 4.29008ZM0.128906 4.43652H110.764V3.43652H0.128906V4.43652Z"
                                fill="white"/></svg>
                                </span>
                            </button>
                        </div>
                        <p className={'portfolio__slide-down'}>scroll down</p>



                        <div className={'design__info'}>
                            {
                                state === 'Design'
                                ? <>
                                        <div className="design__info-images">
                                            <img className={'design__info-img'} src={img1} alt=""/>
                                            <img className={'design__info-img design__info-img2'} src={img2} alt=""/>
                                            <p className={'design__info-title'}>Design</p>
                                        </div>
                                        <p className={'design__info-text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                        </p>
                                </> :
                                    state === 'Technology'
                                        ? <>
                                            <div className="design__info-images">
                                                <img className={'design__info-img'} src={tech2} alt=""/>
                                                <img className={'design__info-img design__info-img2'} src={tech1} alt=""/>
                                                <p className={'design__info-title'}>Technology</p>
                                            </div>
                                            <p className={'design__info-text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            </p>
                                        </> :
                                        state === 'Marketing'
                                            ? <>
                                                <div className="design__info-images">
                                                    <img className={'design__info-img'} src={img2} alt=""/>
                                                    <img className={'design__info-img design__info-img2'} src={mark1} alt=""/>
                                                    <p className={'design__info-title'}>Marketing</p>
                                                </div>
                                                <p className={'design__info-text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                </p>
                                            </> :
                                            state === 'Research'
                                                ? <>
                                                    <div className="design__info-images">
                                                        <img className={'design__info-img'} src={img2} alt=""/>
                                                        <img className={'design__info-img design__info-img2'} src={search1} alt=""/>
                                                        <p className={'design__info-title'}>Research</p>
                                                    </div>
                                                    <p className={'design__info-text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                    </p>
                                                </> :
                                                ''
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;