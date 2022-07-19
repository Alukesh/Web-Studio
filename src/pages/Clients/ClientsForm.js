import React from 'react';
import follow1 from "../Home/follow1.png";
import follow2 from "../Home/follow2.png";

const ClientsForm = () => {
    return (
        <div className={'contact container'}>
            <div className="container">
                <div className="contact__wrapper">
                    <p className={'aside-text'}>for clients</p>
                    <div className={'contact__form-area'}>
                        <p className={'contact__form-text'}>IF YOU ARE AN EXISTING CUSTOMER AND WOULD LIKE TO PAY THE INVOICE, PLEASE FOLLOW THE STEPS BELOW</p>
                        <form className={'contact__form'}>
                            <label className={'contact__form-label'} htmlFor="name">First name</label>
                            <input className={'input contact__form-input'} id={'name'} type="text" placeholder={'Enter your first name'}/>

                            <label className={'contact__form-label'} htmlFor="last name">Last name</label>
                            <input className={'input contact__form-input'} id={'last name'} type="text" placeholder={'Enter your email'}/>

                            <label className={'contact__form-label'} htmlFor="pay for">Services you pay for</label>
                            <input className={'input contact__form-input'} id={'pay for'} type="text" placeholder={'Services you pay for'}/>

                            <label className={'contact__form-label'} htmlFor="amount">Amount</label>
                            <input className={'input contact__form-input'} id={'amount'} type="number" placeholder={'Amount'}/>


                            <button className={'squareBtn contact__form-btn'}>Pay now</button>
                        </form>
                    </div>


                    <div className={'contact__form-area'}>
                        <p className={'contact__form-text'}>IF YOU ARE AN EXISTING CUSTOMER AND WOULD LIKE TO PAY THE INVOICE, PLEASE FOLLOW THE STEPS BELOW</p>
                        <form className={'contact__form'}>
                            <label className={'contact__form-label'} htmlFor="name2">First name</label>
                            <input className={'input contact__form-input'} id={'name2'} type="text" placeholder={'Enter your first name'}/>

                            <label className={'contact__form-label'} htmlFor="last name2">Last name</label>
                            <input className={'input contact__form-input'} id={'last name2'} type="text" placeholder={'Enter your email'}/>

                            <label className={'contact__form-label'} htmlFor="pay for2">Services you pay for</label>
                            <input className={'input contact__form-input'} id={'pay for2'} type="text" placeholder={'Services you pay for'}/>

                            <label className={'contact__form-label'} htmlFor="amount2">Amount</label>
                            <input className={'input contact__form-input'} id={'amount2'} type="number" placeholder={'Amount'}/>


                            <button className={'squareBtn contact__form-btn'}>Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ClientsForm;