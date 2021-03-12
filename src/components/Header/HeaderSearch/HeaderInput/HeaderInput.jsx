/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React from 'react';
import style from './HeaderInput.module.css';

const HeaderInput = (props) => {
  const { name } = props;
  return (
    <div className={style.box}>
      <div className={style.inputСontainer}>
        <h2>Поиск</h2>
        <Field type="text" required="" id="searchInput" name={name} />
      </div>
    </div>
  );
};

export default HeaderInput;
