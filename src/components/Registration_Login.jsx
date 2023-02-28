import React from 'react'
import LogoFacebook from "../img/facebooklogo.svg"
import LogoGoogle from "../img/googlelogo.svg"
import Email from "../img/email.svg"

const Registration_Login = () => {
    return (
        <div>
            <div className='md:w-[432px]'>
                <h1 className='text-[20px] font-bold pb-[24px]'>Registrati o accedi</h1>
                <div className='pb-[16px]'>
                    <button className='bg-facebook h-[48px] text-white font-bold w-full rounded-[3px] flex gap-3 justify-center items-center'>
                        <img className='w-[20px]' src={LogoFacebook} alt="logo_google" />
                        <p>Accedi con Facebook</p>
                    </button>
                </div>
                <div className='pb-[16px]'>
                    <button className='bg-white h-[48px] border-[1px] border-slate-500  font-bold w-full rounded-[3px] flex gap-3 justify-center items-center'>
                        <img className='w-[20px]' src={LogoGoogle} alt="logo_google" />
                        <p>Accedi con Google</p>
                    </button>
                </div>
                <div className='flex justify-between items-baseline pb-[16px]'>
                    <div className='bg-slate-300 h-[1px] w-full'></div>
                    <div>
                        <p className='px-[15px] text-[13px]'>oppure</p>
                    </div>
                    <div className='bg-slate-300 h-[1px] w-full'></div>
                </div>
                <div className='pb-[16px]'>
                    <button className='bg-deliveroo text-white h-[48px] font-bold w-full rounded-[3px] flex gap-3 justify-center items-center'>
                        <img className='w-[20px]' src={Email} alt="logo_google" />
                        <p>Accedi con la tua email</p>
                    </button>
                </div>
                <div className='text-[13px]'>
                    <p>Procedendo acconsenti ai nostri <span className='text-deliveroo underline'>termini e condizioni.
                    </span> Ti preghiamo di prendere anche visione della nostra
                        <span className='text-deliveroo underline'>informativa sulla privacy.
                        </span> Utilizziamo i tuoi dati per offrirti un'esperienza personalizzata e per migliorare il nostro servizio.
                        <span className='text-deliveroo underline'>Leggi qui per maggiori informazioni.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Registration_Login