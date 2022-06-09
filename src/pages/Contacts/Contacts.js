import React from 'react';
import follow1 from "../Home/follow1.png";
import follow2 from "../Home/follow2.png";

const Contacts = () => {
    return (
        <>
            <div className={'contact container'}>
                <div className="container">
                    <div className="contact__wrapper">
                        <p className={'aside-text'}>contacts</p>
                       <div className={'contact__form-area'}>
                           <h2 className={'contact__form-title'}>Contact us</h2>
                           <p className={'contact__form-text'}>Let’s get to the nex level together</p>
                           <form className={'contact__form'}>
                               <label className={'contact__form-label'} htmlFor="name">Full name</label>
                               <input className={'input contact__form-input'} id={'name'} type="text" placeholder={'Enter your first name'}/>

                               <label className={'contact__form-label'} htmlFor="email">Email</label>
                               <input className={'input contact__form-input'} id={'email'} type="email" placeholder={'Enter your email'}/>

                               <label className={'contact__form-label'} htmlFor="texthelp">How can we help?</label>
                               <textarea className={'input contact__form-input'} name="help" id="texthelp" cols="30" rows="10" placeholder={'Your massage'}/>
                               <button className={'squareBtn contact__form-btn'}>Send</button>
                           </form>
                       </div>


                       <div className={'contact__info'}>
                           <div className="contact__info-links">
                               <a className={'contact__info-link'} href="tel:+1647-563-9114"><svg
                                   width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4552 14.678L16.6641 11.8869C15.6673 10.8901 13.9727 11.2889 13.574 12.5847C13.275 13.4819 12.2782 13.9803 11.381 13.7809C9.38741 13.2825 6.69603 10.6908 6.19763 8.59746C5.89859 7.7003 6.49667 6.70349 7.3938 6.40448C8.68965 6.00576 9.08837 4.31119 8.09156 3.31438L5.3005 0.523324C4.50306 -0.174441 3.30689 -0.174441 2.60912 0.523324L0.71519 2.41726C-1.17874 4.41087 0.914551 9.69395 5.59954 14.3789C10.2845 19.0639 15.5676 21.2569 17.5612 19.2633L19.4552 17.3694C20.153 16.5719 20.153 15.3757 19.4552 14.678Z" fill="white"/>
                               </svg>+1 (647)-563-9114
                               </a>
                               <a className={'contact__info-link'} href="https://mail.ru/" target='_blank'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <g clipPath="url(#clip0_34_3298)">
                                       <path d="M13.2588 10.1024L20.0013 14.3649V5.65991L13.2588 10.1024Z" fill="white"/>
                                       <path d="M0 5.65991V14.3649L6.7425 10.1024L0 5.65991Z" fill="white"/>
                                       <path d="M18.7486 3.125H1.24863C0.624883 3.125 0.129883 3.59 0.0361328 4.18875L9.99863 10.7525L19.9611 4.18875C19.8674 3.59 19.3724 3.125 18.7486 3.125Z" fill="white"/>
                                       <path d="M12.1135 10.8577L10.3448 12.0227C10.2398 12.0914 10.121 12.1252 10.001 12.1252C9.88102 12.1252 9.76227 12.0914 9.65727 12.0227L7.88852 10.8564L0.0410156 15.8202C0.137266 16.4139 0.629766 16.8752 1.25102 16.8752H18.751C19.3723 16.8752 19.8648 16.4139 19.961 15.8202L12.1135 10.8577Z" fill="white"/>
                                   </g>
                                   <defs>
                                       <clipPath id="clip0_34_3298">
                                           <rect width="20" height="20" fill="white"/>
                                       </clipPath>
                                   </defs>
                               </svg>
                                   lead@gmail.com
                               </a>
                               <a className={'contact__info-link'} target='_blank' href="https://www.google.com/maps/place/Margaretenstra%C3%9Fe+70%2FStiege+3,+1050+Wien,+%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B8%D1%8F/data=!4m2!3m1!1s0x476d07873f995555:0xd1b321a31ddba10a?sa=X&ved=2ahUKEwjH8PG70Z34AhUnxosKHRm8BuQQ8gF6BAgQEAE"><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M8.25154 0.00416853C4.18995 -0.132709 0.854492 3.11898 0.854492 7.14965C0.854492 11.724 5.24432 15.0438 7.70481 19.818C7.82973 20.0604 8.17868 20.0608 8.30403 19.8184C10.5299 15.5225 14.3342 12.6419 15.0392 8.50332C15.7692 4.2207 12.5934 0.150548 8.25154 0.00416853ZM8.00407 10.8947C5.93579 10.8947 4.25907 9.21789 4.25907 7.14965C4.25907 5.08142 5.93583 3.40466 8.00407 3.40466C10.0723 3.40466 11.7491 5.08142 11.7491 7.14965C11.7491 9.21789 10.0723 10.8947 8.00407 10.8947Z" fill="white"/>
                               </svg>
                                   Margaretenstraße 70/3, 1050 Vienna, Austria
                               </a>
                           </div>

                           <div className={'contact__info-blocks'}>
                               <a className={'contact__info-block'} href='#'>
                                   <p className={'contact__info-title'}>BECOME A CLIENT </p>
                                   <p className={'contact__info-text'}>business@LEAD.com</p>
                                   <svg className={'contact__info-arrow'} width="153" height="16" viewBox="0 0 153 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M152.707 8.70711C153.098 8.31658 153.098 7.68342 152.707 7.29289L146.343 0.928932C145.953 0.538408 145.319 0.538408 144.929 0.928932C144.538 1.31946 144.538 1.95262
                                       144.929 2.34315L150.586 8L144.929 13.6569C144.538 14.0474 144.538 14.6805 144.929 15.0711C145.319 15.4616 145.953 15.4616 146.343 15.0711L152.707 8.70711ZM0 9H152V7H0V9Z" fill="white"/>
                                   </svg>
                               </a>
                               <div className={'home__information-links'}>
                                   <p className={'home__information-follow'}>Follow us</p>
                                   <div className={'home__information-icons'}>
                                       <a href="#"><img src={follow1} alt=""/></a>
                                       <a href="#"><img src={follow2} alt=""/></a>
                                       <a href="#">
                                           <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                               <path d="M26 22C26 24.2092 24.2092 26 22 26C19.7908 26 18 24.2092 18 22C18 19.7908 19.7908 18 22 18C24.2092 18 26 19.7908 26 22Z" fill="white"/>
                                               <path d="M31.4844 14.9463C31.2792 14.3902 30.9518 13.8868 30.5263 13.4737C30.1132 13.0482 29.6101 12.7208 29.0537 12.5156C28.6024 12.3403 27.9244 12.1317 26.6757 12.0749C25.3249 12.0133 24.9199 12 21.5002 12C18.0801 12 17.6751 12.0129 16.3246 12.0745C15.0759 12.1317 14.3976 12.3403 13.9467 12.5156C13.3902 12.7208 12.8868 13.0482 12.474 13.4737C12.0486 13.8868 11.7212 14.3899 11.5156 14.9463C11.3403 15.3976 11.1317 16.0759 11.0749 17.3246C11.0133 18.6751 11 19.0801 11 22.5002C11 25.9199 11.0133 26.3249 11.0749 27.6757C11.1317 28.9244 11.3403 29.6024 11.5156 30.0537C11.7212 30.6101 12.0482 31.1132 12.4737 31.5263C12.8868 31.9518 13.3899 32.2792 13.9463 32.4844C14.3976 32.66 15.0759 32.8686 16.3246 32.9255C17.6751 32.9871 18.0798 33 21.4998 33C24.9202 33 25.3253 32.9871 26.6754 32.9255C27.9241 32.8686 28.6024 32.66 29.0537 32.4844C30.1707 32.0535 31.0535 31.1707 31.4844 30.0537C31.6597 29.6024 31.8683 28.9244 31.9255 27.6757C31.9871 26.3249 32 25.9199 32 22.5002C32 19.0801 31.9871 18.6751 31.9255 17.3246C31.8686 16.0759 31.66 15.3976 31.4844 14.9463ZM21.5002 29.0766C17.8677 29.0766 14.9231 26.1323 14.9231 22.4998C14.9231 18.8674 17.8677 15.9231 21.5002 15.9231C25.1323 15.9231 28.0769 18.8674 28.0769 22.4998C28.0769 26.1323 25.1323 29.0766 21.5002 29.0766ZM28.3369 17.2001C27.4881 17.2001 26.7999 16.5119 26.7999 15.6631C26.7999 14.8143 27.4881 14.1261 28.3369 14.1261C29.1857 14.1261 29.8739 14.8143 29.8739 15.6631C29.8736 16.5119 29.1857 17.2001 28.3369 17.2001Z" fill="white"/>
                                               <path d="M22 0C9.85159 0 0 9.85159 0 22C0 34.1484 9.85159 44 22 44C34.1484 44 44 34.1484 44 22C44 9.85159 34.1484 0 22 0ZM34.5566 27.2083C34.4955 28.5531 34.2817 29.4712 33.9695 30.2748C33.3132 31.9718 31.9718 33.3132 30.2748 33.9695C29.4715 34.2817 28.5531 34.4952 27.2086 34.5566C25.8615 34.618 25.4311 34.6328 22.0003 34.6328C18.5692 34.6328 18.1392 34.618 16.7917 34.5566C15.4473 34.4952 14.5288 34.2817 13.7255 33.9695C12.8822 33.6523 12.1189 33.1551 11.4878 32.5122C10.8452 31.8815 10.3481 31.1178 10.0309 30.2748C9.71866 29.4715 9.50482 28.5531 9.44373 27.2086C9.38162 25.8611 9.36719 25.4308 9.36719 22C9.36719 18.5692 9.38162 18.1389 9.44339 16.7917C9.50449 15.4469 9.71799 14.5288 10.0302 13.7252C10.3474 12.8822 10.8449 12.1185 11.4878 11.4878C12.1185 10.8449 12.8822 10.3477 13.7252 10.0305C14.5288 9.71832 15.4469 9.50482 16.7917 9.44339C18.1389 9.38196 18.5692 9.36719 22 9.36719C25.4308 9.36719 25.8611 9.38196 27.2083 9.44373C28.5531 9.50482 29.4712 9.71832 30.2748 10.0302C31.1178 10.3474 31.8815 10.8449 32.5126 11.4878C33.1551 12.1189 33.6526 12.8822 33.9695 13.7252C34.282 14.5288 34.4955 15.4469 34.5569 16.7917C34.6184 18.1389 34.6328 18.5692 34.6328 22C34.6328 25.4308 34.6184 25.8611 34.5566 27.2083Z" fill="white"/>
                                           </svg>
                                       </a>
                                   </div>
                               </div>
                               <a className={'contact__info-block contact__info-block-white'} href='#'>
                                   <p className={'contact__info-title'}>BECOME A PARTNER</p>
                                   <p className={'contact__info-text'}>business@LEAD.com</p>
                                   <svg className={'contact__info-arrow'} width="153" height="16" viewBox="0 0 153 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M152.707 8.70711C153.098 8.31658 153.098 7.68342 152.707 7.29289L146.343 0.928932C145.953 0.538408 145.319 0.538408 144.929 0.928932C144.538 1.31946 144.538 1.95262
                                       144.929 2.34315L150.586 8L144.929 13.6569C144.538 14.0474 144.538 14.6805 144.929 15.0711C145.319 15.4616 145.953 15.4616 146.343 15.0711L152.707 8.70711ZM0 9H152V7H0V9Z" fill="black"/>
                                   </svg>
                               </a>
                               <a className={'contact__info-block'} href='#'>
                                   <p className={'contact__info-title'}>JOIN LEAD TEAM</p>
                                   <p className={'contact__info-text'}>business@LEAD.com</p>
                                   <svg className={'contact__info-arrow'} width="153" height="16" viewBox="0 0 153 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M152.707 8.70711C153.098 8.31658 153.098 7.68342 152.707 7.29289L146.343 0.928932C145.953 0.538408 145.319 0.538408 144.929 0.928932C144.538 1.31946 144.538 1.95262
                                       144.929 2.34315L150.586 8L144.929 13.6569C144.538 14.0474 144.538 14.6805 144.929 15.0711C145.319 15.4616 145.953 15.4616 146.343 15.0711L152.707 8.70711ZM0 9H152V7H0V9Z" fill="white"/>
                                   </svg>
                               </a>


                           </div>

                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;