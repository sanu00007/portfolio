import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './styles.scss'
const data = [
    {

        label: 'HOME',
        to: '/portfolio/'
    },
    {

        label: 'ABOUT ME',
        to: '/about'
    },
    {

        label: 'SKILLS',
        to: '/skills'
    },
    {

        label: 'RESUME',
        to: '/resume'
    },
    // {

    //     label: 'PORTFOLIO',
    //     to: '/portfolio'
    // },
    {

        label: 'CONTACT',
        to: '/contact'
    },

]

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    const closeNavbar = () => {
        if (toggleIcon) {
            setToggleIcon(false);
        }
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/portfolio/'} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to} onClick={closeNavbar}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }

                </div>
            </nav>
            {toggleIcon && <div className="overlay" onClick={handleToggleIcon}></div>}
        </div>
    )

}

export default Navbar;