import React from 'react'
import GoogleStore from "../img/googlestore.png"
import AppStore from "../img/appstore.png"
import LogoFacebook from "../img/facebooklogo.svg"
import LogoTwitter from "../img/twitterlogo.svg"
import LogoInstagram from "../img/instagramlogo.svg"



const TerminiCondizioni = () => {
    return (
        <div>
            <div className='bg-divgrey1 p-[16px] flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center'>
                <div className='bg-divgrey2 p-[24px] text-white md:w-[45%] lg:w-1/5'>
                    <h1 className='pb-[16px] text-[18px] font-semibold'>Scopri Deliveroo</h1>
                    <ul className='flex flex-col gap-2 text-[14px]'>
                        <li>Investitori</li>
                        <li>Chi siamo</li>
                        <li>Ristoranti</li>
                        <li>Altro</li>
                        <li>Pressroom</li>
                        <li>Programmazione</li>
                        <li>Design</li>
                        <li>Lavora con noi</li>
                        <li>Diventa nostro partner</li>
                    </ul>
                </div>
                <div className='bg-divgrey2 p-[24px] text-white md:w-[45%] lg:w-1/5'>
                    <h1 className='pb-[16px] text-[18px] font-semibold'>Note legali</h1>
                    <ul className='flex flex-col gap-2 text-[14px]'>
                        <li>Termini e Condizioni</li>
                        <li>Informativa sulla privacy</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div className='bg-divgrey2 p-[24px] text-white md:w-[45%] lg:w-1/5'>
                    <h1 className='pb-[16px] text-[18px] font-semibold'>Aiuto</h1>
                    <ul className='flex flex-col gap-2 text-[14px]'>
                        <li>Contatti</li>
                        <li>FAQ</li>
                        <li>Tipi di cucina</li>
                    </ul>
                </div>
                <div className='bg-divgrey2 p-[24px] text-white md:w-[45%] lg:w-1/5'>
                    <h1 className='pb-[16px] text-[18px] font-semibold'>Porta Deliveroo con te</h1>
                    <ul className='flex flex-col gap-2 text-[14px]'>
                        <li><img className='w-[135px]' src={AppStore} alt="app_store" /></li>
                        <li><img className='w-[135px]' src={GoogleStore} alt="google_store" /></li>
                    </ul>
                </div>
                <div className='flex justify-between md:w-full md:px-[45px] lg:px-[80px]'>
                    <div className='flex gap-3'>
                        <img className='w-[20px]' src={LogoFacebook} alt="facebook" />
                        <img className='w-[20px]' src={LogoTwitter} alt="twitter" />
                        <img className='w-[20px]' src={LogoInstagram} alt="instagram" />
                    </div>
                    <div>
                        <p className='text-divgrey2'>© 2023 Deliveroo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TerminiCondizioni