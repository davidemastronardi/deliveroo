import React from 'react'
import Logo from "../img/logo.png"
import HomeDeliveroo from "../img/homedeliveroo.svg"
import Menu from "../img/menu.svg"
import { Link } from 'react-router-dom'
import Registration_Login from '../components/Registration_Login'

const Login = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between items-center h-[70px] w-full px-[15px] border-b-[1px] bg-white'>
                    <Link to="/">
                        <img className='w-[120px] h-[32px] ' src={Logo} alt="logo" />
                    </Link>
                    <div className='flex gap-2'>

                        <button className='bg-white h-[40px] rounded-[3px] border-[1px] flex items-center px-[15px] py-[px] gap-2'>
                            <img className='w-[18px]' src={Menu} alt="hamburgher_menu" />
                            <p>Menu</p>
                        </button>
                    </div>
                </div>
                <div className=' w-full flex justify-center px-[16px] py-[64px]'>
                    <div>
                        <Registration_Login />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login