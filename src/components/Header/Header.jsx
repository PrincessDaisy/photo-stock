/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import style from './Header.module.css';
import logo from '../../assets/icons/logo.png';
import favorites from '../../assets/icons/favorites.png';
import searchHistory from '../../assets/icons/search-history.png';
import search from '../../assets/icons/search.png';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import PhotosAPI from '../../api';

const Header = (props) => {
  const { setSearchVal } = props;

  const fetchTopics = async () => {
    const { data } = await PhotosAPI.getTopicList();
    return data;
  };

  const { data: topicsListData, isSuccess: isSuccessTopicsListFetch } = useQuery(['topicsList'], () => fetchTopics());

  return (
    <div className={style.Header}>
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
          <HeaderSearch setSearchVal={setSearchVal} />
        </div>
      </Container>
      <Container>
        <div className="col">
          {!!isSuccessTopicsListFetch && topicsListData.map((item) => ` ${item.title} `)}
        </div>
      </Container>
    </div>
  );
};

export default Header;
