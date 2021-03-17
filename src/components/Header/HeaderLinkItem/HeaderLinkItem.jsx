/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './HeaderLinkItem.module.css';

const HeaderLinkItem = (props) => {
  const { data: { link, imgSrc, text } } = props;
  return (
    <div className={style.headerLink}>
      <NavLink to={link}>
        <span className={style.linkIcon}>
          <img src={imgSrc} alt="" />
        </span>
        <span className={style.linkText}>
          {text}
        </span>
      </NavLink>
    </div>
  );
};

export default HeaderLinkItem;
