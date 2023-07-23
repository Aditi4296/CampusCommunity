import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Image from './images/logo.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
    return(
        <div className='header'>

            <div className='header__left'>
                <img src={Image} alt="CampusConnect" />

                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' /> 

                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={InfoIcon} title='About Us'/>
                <HeaderOption Icon={ShoppingBagIcon} title='Sell'/>
                <HeaderOption Icon={StoreIcon} title='Store'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='Community'/>
                <HeaderOption Icon={AccountCircleIcon} title='Profile'/>
            </div>
        </div>
    )
}

export default Header