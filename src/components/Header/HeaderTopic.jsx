/* eslint-disable react/prop-types */
import React from 'react';
import style from './Header.module.css';

const HeaderTopic = (props) => {
  const { title } = props;
  return (
    <>
      <div className={style.topicItem}>{title}</div>
    </>
  );
};
export default HeaderTopic;
