import React from 'react' //rfce
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import icon from './svg/linkedin_icon.svg';

function Header() {
    return (
        <div className='header'>

            <div className='header__left'>
                <img src={icon} alt='icon' />
                <div className='header__search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>


            <div className='header__right'>



            </div>
        </div>
    )
}

export default Header