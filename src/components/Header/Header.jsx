/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React from 'react';
import { useQuery } from 'react-query';
import { withRouter } from 'react-router';
import style from './Header.module.css';
import logo from '../../assets/icons/Vector.svg';
import favorites from '../../assets/icons/favorite_24px.svg';
import searchHistory from '../../assets/icons/history_24px.svg';
import search from '../../assets/icons/search_24px.svg';
import HeaderSearch from './HeaderSearch';
import { PhotosAPI } from '../../api';
import HeaderLinkItem from './HeaderLinkItem';
import HeaderTopic from './HeaderTopic';
import { SearchHistory } from '../SearchHistory';

const Header = withRouter((props) => {
  const { setSearchVal, location } = props;

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
      <div className="container p-0">
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
              className={style.logo}
            />
          </div>
          <div className={style.linksBlock}>
            {linksDataArr.map((item) => <HeaderLinkItem data={item} key={item.key} />)}
          </div>
        </div>
      </div>
      {location.pathname === '/home'
        && (
        <>
          <div className="container">
            <div>
              <HeaderSearch setSearchVal={setSearchVal} />
            </div>
          </div>
          <div className={`container ${style.shadow}`}>
            <div className={style.topicWrapper}>
              {!!isSuccessTopicsListFetch
              && topicsListData.map((item) => <HeaderTopic title={item.title} key={item.id} />)}
            </div>
          </div>
        </>
        )}
      {location.pathname === '/history' && <SearchHistory />}
    </div>
  );
});

export default Header;
