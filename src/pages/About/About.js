import React from 'react';

const About = () => {
    return (
        <div>
            <div className={'about container'}>
                <div className="container">
                    <div className="about__wrapper">
                        <p className={'aside-text aside-text-info'}>information about</p>
                        <h2 className={'about__title'}>Want a unique design? We will help you!</h2>

                        <div className={'about__info'}>
                            <p className={'about__text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                            <p className={'about__text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate </p>
                            <button className={'about__btn circleBtn'}>Start project <span>
                            <svg width="112" height="8" viewBox="0 0 112 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M111.117 4.29008C111.313 4.09481 111.313 3.77823 111.117 3.58297L107.935 0.40099C107.74 0.205727 107.424 0.205727 107.228 0.40099C107.033 0.596252 107.033 0.912834 107.228 1.1081L110.057 3.93652L107.228 6.76495C107.033 6.96021 107.033 7.2768 107.228 7.47206C107.424 7.66732 107.74 7.66732 107.935 7.47206L111.117 4.29008ZM0.128906 4.43652H110.764V3.43652H0.128906V4.43652Z" fill="white"/></svg>
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;