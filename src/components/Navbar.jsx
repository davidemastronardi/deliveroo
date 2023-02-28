import React, { useState } from 'react'
import Logo from "../img/logo.png"
import Menu from "../img/menu.svg"
import Exit from "../img/exit.svg"
import FoodGrey from "../img/foodgrey.svg"
import Shop from "../img/shop.svg"
import Faq from "../img/faq.svg"
import RightArrow from "../img/rightarrow.svg"
import ArrowUp from "../img/arrowup.svg"
import ArrowBelow from "../img/arrowbelow.svg"
import ShopDeliveroo from "../img/shopdeliveroo.svg"
import WorkDeliveroo from "../img/workdeliveroo.svg"
import FoodDeliveroo from "../img/fooddeliveroo.svg"

const Navbar = () => {

    const [openNav, setOpenNav] = useState(true);
    const [openCollConNoi, setOpenColConNoi] = useState(true);

    return (
        <div>
            <div className='bg-black flex justify-between items-center h-[60px] w-full px-[15px] gap-2'>
                <img className='w-[120px] h-[32px] ' src={Logo} alt="logo_deliveroo" />
                <div className='flex gap-[10px]'>
                    <button onClick={() => setOpenColConNoi(!openCollConNoi)} className='hidden bg-white h-[40px] rounded-[3px] md:flex items-center px-[15px] py-[px] gap-2'>
                        {openCollConNoi ? <img className='w-[30px]' src={ArrowBelow} alt="arrow_below" /> :
                            <img className='w-[30px]' src={ArrowUp} alt="arrow_below" />}
                        <p>Collabora con noi</p>
                        {!openCollConNoi && <div className='p-[10px] bg-yellow-300 top-[55px] left-[259px] rounded-[3px] absolute'>
                            <div className='px-[12px] py-[10px] flex flex-col gap-3 text-[15px]'>
                                <div className='flex gap-4'>
                                    <img className='w-[20px]' src={FoodDeliveroo} alt="FoodGrey" />
                                    <p>Ristoranti</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img className='w-[20px]' src={WorkDeliveroo} alt="FoodGrey" />
                                    <p>Lavora con noi</p>
                                </div>
                                <div className='flex gap-4'>
                                    <img className='w-[20px]' src={ShopDeliveroo} alt="FoodGrey" />
                                    <p>Deliveroo for Work</p>
                                </div>
                            </div>
                        </div>}
                    </button>
                    <button className='hidden bg-white h-[40px] rounded-[3px] md:flex items-center px-[15px] py-[px] gap-2'>
                        <img className='w-[18px]' src={Menu} alt="hamburgher_menu" />
                        <p>Registrati o accedi</p>
                    </button>
                    <button onClick={() => setOpenNav(!openNav)} className='bg-white h-[40px] rounded-[3px] flex items-center px-[15px] py-[px] gap-2'>
                        <img className='w-[18px]' src={Menu} alt="hamburgher_menu" />
                        <p>Menu</p>
                    </button>
                </div>
            </div>

            {!openNav && <div className='w-full h-full overlay fixed'>
                <div className='w-full h-screen bg-grigio fixed top-0 md:w-[375px] md:right-0 md:border-l-[1px] '>
                    <div className='flex justify-between items-center h-[60px] w-full px-[15px] border-b-[1px] bg-white'>
                        <img className='w-[120px] h-[32px] ' src={Logo} alt="logo" />
                        <img onClick={() => setOpenNav(!openNav)} className='w-[18px]' src={Exit} alt="exit" />
                    </div>
                    <div className='p-[16px] pt-[30px] flex justify-center border-b-[1px] pb-[40px]'>
                        <button className='w-full h-[48px] bg-deliveroo hover:bg-overlay_delivero rounded-[3px] text-white font-semibold'>
                            Registrati o accedi
                        </button>
                    </div>
                    <div className='bg-white p-[4px] border-b-[1px] hover:text-deliveroo md:hidden'>
                        <div className='px-[12px] py-[8px] flex items-center'>
                            <span className='pr-[16px]'>
                                <img className='w-[30px]' src={FoodGrey} alt="FoodGrey" />
                            </span>
                            <span className='w-full'>
                                <p>Aggiungi il tuo ristorante</p>
                            </span>
                            <img className='w-[25px]' src={RightArrow} alt="RightArrow" />
                        </div>
                    </div>
                    <div className='bg-white p-[4px] border-b-[1px] hover:text-deliveroo md:hidden'>
                        <div className='px-[12px] py-[8px] flex items-center'>
                            <span className='pr-[16px]'>
                                <img className='w-[30px]' src={Shop} alt="shop" />
                            </span>
                            <span className='w-full'>
                                <p>Crea un account aziendale</p>
                            </span>
                            <img className='w-[25px]' src={RightArrow} alt="RightArrow" />
                        </div>
                    </div>
                    <div className='bg-white p-[4px] border-b-[1px] hover:text-deliveroo'>
                        <div className='px-[12px] py-[8px] flex items-center'>
                            <span className='pr-[16px]'>
                                <img className='w-[35px]' src={Faq} alt="faq" />
                            </span>
                            <span className='w-full'>
                                <p>FAQ</p>
                            </span>
                            <img className='w-[25px]' src={RightArrow} alt="RightArrow" />
                        </div>
                    </div>
                    <div className='w-full absolute bottom-0 py-[16px]'>
                        <div className='p-[16px]'>
                            <div>
                                <select className='w-full px-[16px] py-[8px] border-[1px] rounded-[3px] text-black' name="Linguage" id="">
                                    <option value="Italiano">Italiano</option>
                                    <option value="Inglese">Inglese</option>
                                </select>
                            </div>
                        </div>
                        <div className='px-[16px]'>
                            <div>
                                <select className='w-full px-[16px] py-[8px] border-[1px] rounded-[3px] text-black' name="Linguage" id="">
                                    <option value="Italia">Italia</option>
                                    <option value="Inglese">Autralia</option>
                                    <option value="Inglese">Belgio</option>
                                    <option value="Inglese">Emirati rabi Uniti</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default Navbar