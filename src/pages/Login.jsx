import React from 'react'
import Logo from "../img/logo.png"
import HomeDeliveroo from "../img/homedeliveroo.svg"
import Menu from "../img/menu.svg"
import { Link } from 'react-router-dom'
import Registration_Login from '../components/Registration_Login'
import TerminiCondizioni from '../components/TerminiCondizioni'

const Login = () => {
    return (
        <div>
            <div>
                <div className=' w-full flex justify-center px-[16px] py-[64px]'>
                    <div>
                        <Registration_Login />
                    </div>
                </div>
                <div className='w-full'>
                    <div>
                        <TerminiCondizioni/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login