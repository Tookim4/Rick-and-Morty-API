import React from 'react'
import Logo from '../images/pngguru.com.png'

const Header = () => {
    return (
        <div className='main-header'>
                <img src={Logo} alt='brand' className='brand-logo'></img>
        </div>
    )
}

export default Header
