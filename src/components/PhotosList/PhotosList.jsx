/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Photo from './Photo';
import style from './PhotosList.module.css';

const PhotosList = withRouter((props) => {
  const [dir, setDir] = useState(style.gridCol);

  const changeDirRow = () => {
    setDir(style.gridRow);
  };

  const changeDirCol = () => {
    setDir(style.gridCol);
  };

  const { photosList: photosArray, location } = props;

  return (
    <div className="container p-0">
      {!location.pathname.includes('/photo')
      && (
      <div className={style.dirControl}>
        <button className={style.changeDir} type="button" onClick={changeDirRow}>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <rect width="23" height="10" fill="#BDBDBD" />
            <rect y="13" width="23" height="10" fill="#BDBDBD" />
          </svg>
        </button>
        <button className={style.changeDir} type="button" onClick={changeDirCol}>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <rect width="10" height="10" fill="#BDBDBD" />
            <rect y="13" width="10" height="10" fill="#BDBDBD" />
            <rect x="13" width="10" height="10" fill="#BDBDBD" />
            <rect x="13" y="13" width="10" height="10" fill="#BDBDBD" />
          </svg>
        </button>
      </div>
      )}
      <div className={dir}>
        {!!photosArray
            && photosArray.map((item) => <Photo item={item} key={item.id} />)}
      </div>
    </div>
  );
});

export default PhotosList;
