import React from 'react';
import HeaderTopic from '../Header/HeaderTopic';
import style from './SearchHistory.module.css';

const SearchHistory = () => {
  let SearchHistoryArr = null;
  if (localStorage.getItem('SearchHistory')) {
    SearchHistoryArr = JSON.parse(localStorage.getItem('SearchHistory'));
  }
  return (
    <>
      <div className="container p-0">
        <h2 className={style.heading}>Ваши запросы</h2>
        <div className={style.topicWrapper}>
          {SearchHistoryArr
        && SearchHistoryArr.map((item) => <HeaderTopic title={item} key={item} />)}
        </div>
      </div>
    </>
  );
};

export default SearchHistory;
