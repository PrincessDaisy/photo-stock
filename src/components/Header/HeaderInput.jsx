/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React from 'react';
import style from './Header.module.css';

const HeaderInput = (props) => {
  const { name } = props;
  return (
    <div className={style.box}>
      <div className={style.inputСontainer}>
        <Field type="text" required="" id="searchInput" name={name} autoComplete="off" />
        <label htmlFor="searchInput">Поиск</label>
      </div>
    </div>
  );
};

export default HeaderInput;
