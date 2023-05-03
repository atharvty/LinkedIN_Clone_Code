import React from 'react'
import HeaderOption from './HeaderOption';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import melogo from './images/me.png';
import logo from './images/linkedin.png';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';



function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();


    const logoutOfApp =()=>{
        dispatch(logout())
        auth.signOut();

    }
    return (
        <div className='header'>
            


            <div className="header__left">
            <img src= {logo} alt=""/>
        

                <div class="header__search">
                    
                    <SearchIcon/>
                    
                    <input type="text" placeholder="Search" />

                </div>
  

            </div>
            

            <div className="header__right">
                <HeaderOption Icon ={HomeIcon} title='Home' />
                {/* <HeaderOption Icon ={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon ={BusinessCenterIcon} title='Jobs' /> */}
                <HeaderOption Icon ={ChatIcon} title='Messaging' />
                <HeaderOption Icon ={NotificationsIcon} title='Notifications' />
                <HeaderOption  title='Me' avatar={true} onClick={logoutOfApp} />

                
            </div>
 
            
        </div>
    )
}

export default Header
