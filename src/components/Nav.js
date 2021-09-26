import React from 'react';
import Icons from "../sprite.svg";
const Nav = () => {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={`${Icons}#icon-home`} />
                        </svg>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={`${Icons}#icon-home`} />
                        </svg>
                        <span>Expense</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={`${Icons}#icon-home`} />
                        </svg>
                        <span>Reports</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref={`${Icons}#icon-home`} />
                        </svg>
                        <span>Payments</span>
                    </a>
                </li>
            </ul>
            <div class="legal">
                &copy; 2020 by FW. All rights reserved.
            </div>
        </nav>
    )
}

export default Nav;