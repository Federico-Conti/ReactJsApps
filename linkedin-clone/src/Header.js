import React from 'react' //rfce
import './Header.css'
import icon from './svg/linkedin_icon.svg';
import HeaderOption from './HeaderOption';

/*Material UI Icons */
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


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
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifiation' />
                <HeaderOption avatar='https://avatars.githubusercontent.com/u/91850761?s=96&v=4' title='me' />
            </div>

        </div>
    )
}

export default Header