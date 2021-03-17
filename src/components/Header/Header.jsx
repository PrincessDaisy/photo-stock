/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import style from './Header.module.css';
import logo from '../../assets/icons/logo.png';
import favorites from '../../assets/icons/favorites.png';
import searchHistory from '../../assets/icons/search-history.png';
import search from '../../assets/icons/search.png';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import PhotosAPI from '../../api';
import HeaderLinkItem from './HeaderLinkItem/HeaderLinkItem';

const Header = (props) => {
  const { setSearchVal } = props;

  const fetchTopics = async () => {
    const { data } = await PhotosAPI.getTopicList();
    return data;
  };

  const { data: topicsListData, isSuccess: isSuccessTopicsListFetch } = useQuery(['topicsList'], () => fetchTopics());

  const linksDataArr = [
    {
      link: '/home',
      imgSrc: search,
      text: 'Поиск',
      key: 'home',
    },
    {
      link: '/favorites',
      imgSrc: favorites,
      text: 'Избранное',
      key: 'favorites',
    },
    {
      link: '/history',
      imgSrc: searchHistory,
      text: 'История поиска',
      key: 'history',
    },
  ];

  return (
    <div className={style.Header}>
      <div className="container">
        <div className={style.headerLinksWrap}>
          <div className={style.logoBlock}>
            <HeaderLinkItem
              data={{
                link: '/home',
                imgSrc: logo,
                text: 'ImageStock',
                key: 'logo',
              }}
              key="logo"
            />
          </div>
          <div className={style.linksBlock}>
            {linksDataArr.map((item) => <HeaderLinkItem data={item} key={item.key} />)}
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
