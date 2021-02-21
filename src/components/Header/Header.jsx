import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import style from "./Header.module.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { PhotosAPI } from '../../api/api';
import { NavLink, Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import logo from '../../assets/icons/logo.png'
import favorites from '../../assets/icons/favorites.png'
import searchHistory from '../../assets/icons/search-history.png'
import search from '../../assets/icons/search.png'

const Header = () => {
    return <div className={style.Header}>
        <div className="container">
            <div className={style.headerLinksWrap}>
                <div className={style.logoBlock}>
                    <div className={style.headerLink}>
                        <NavLink to="/home">
                            <span className={style.linkIcon}>
                                <img src={logo} alt="" />
                            </span>
                            <span className={style.linkText}>
                                ImageStock
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className={style.linksBlock}>
                    <div className={style.headerLink}>
                        <NavLink to="/home">
                            <span className={style.linkIcon}>
                                <img src={search} alt="" />
                            </span>
                            <span className={style.linkText}>
                                Поиск
                            </span>
                        </NavLink>
                    </div>
                    <div className={style.headerLink}>
                        <NavLink to="/favorites">
                            <span className={style.linkIcon}>
                                <img src={favorites} alt="" />
                            </span>
                            <span className={style.linkText}>
                                Избранное
                            </span>
                        </NavLink>
                    </div>
                    <div className={style.headerLink}>
                        <NavLink to="/history">
                            <span className={style.linkIcon}>
                                <img src={searchHistory} alt="" />
                            </span>
                            <span className={style.linkText}>
                                История поиска
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        <Container>
            <div>
               <Header />
            </div>
        </Container>

    </div>
}

export default Header