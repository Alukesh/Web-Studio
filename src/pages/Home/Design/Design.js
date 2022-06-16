import React from 'react';
import img1 from "./img1.png";
import img2 from "./img2.png";

const Design = () => {
    return (
        <div>
            <div className={'contact container'}>
                <div className="container">
                    <div className="contact__wrapper">
                        <p className={'aside-text'}>Services</p>
                        <div className={'design__area'}>
                           sd
                        </div>


                        <div className={'design__info'}>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;