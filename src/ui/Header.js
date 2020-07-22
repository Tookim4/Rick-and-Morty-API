import React from 'react'
import Logo from '../images/pngguru.com.png'
import Buttons from './Buttons'

const Header = () => {
    return (
        <div className='main-header'>
                <img src={Logo} alt='brand' className='brand-logo'></img>
                <Buttons/>
        </div>
    )
}

export default Header
