/* eslint-disable no-undef */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/32.png';
// menu icons
import Video from '../images/video.svg';
import Share from '../images/add.png';
import Add from '../images/film.png';
import Settings from '../images/settings.svg';
// active menu icons
import VideoActive from '../images/blue_video.png';
import ShareActive from '../images/blue_add.png';
import AddActive from '../images/blue_film.png';
import SettingsActive from '../images/blue_settings.png';


const Navbar = () => {
  const location = useLocation();


  return (
    <div className='boxing'>
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
                <p>Konvey</p>
            </div>
            <div className='menu'>
              <NavLink to="/setup" className="activeClass" isActive={() => location.pathname === '/setup'}>
                <img src={location.pathname === '/setup' ? VideoActive : Video} alt="Menu Icon" style={{width:20}}/>
              </NavLink>

              <NavLink to="/videolabel" className="activeClass" isActive={() => location.pathname === '/videolabel'}>
                <img src={location.pathname === '/videolabel' ? ShareActive : Share} alt="Menu Icon" />
              </NavLink>

              <NavLink to="/myrecording" className="activeClass" isActive={() => location.pathname === '/myrecording'}>
                <img src={location.pathname === '/myrecording' ? AddActive : Add} alt="Menu Icon" />
              </NavLink>

              <NavLink to="/preferences" className="activeClass" isActive={() => location.pathname === '/preferences'}>
                <img src={location.pathname === '/preferences' ? SettingsActive : Settings} alt="Menu Icon" />
              </NavLink>

            </div>
        </div>
        <style>
        {`
            .boxing {
                display: flex;
                flex-direction: column;
                // justify-content: center;
                // align-items: center;
                // gap: 20px;
            }

            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                background-color: white;
            }

            .logo {
              display: flex;
              gap: 5px;
              justify-content: center;
              align-items: center;
              // padding-top: 10px;
            }
            .logo img {
              width: px;
            }
            .logo p {
              font-weight: 900;
              font-size: 1em;
              color: #4b84f3;
            }

            .menu {
              display: flex;
              gap: 15px;
              justify-content: center;
              align-items: center;
              // padding-top: 10px;
            }
            .activeClass {
              width: 15px;
              // border-bottom: 1px solid #4b84f3;
            }
            .menu img {
              width: 18px;
            }

				`}
      </style>
    </div>
  )
}

export default Navbar;