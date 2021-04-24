/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Photo from './Photo';
import style from './PhotosList.module.css';

const PhotosList = withRouter((props) => {
  const [dir, setDir] = useState(style.dirRow);
  const [colWidth, setColWidth] = useState('col-lg-4 col-md-8');

  const changeDirRow = () => {
    setDir(style.dirRow);
    setColWidth('col-lg-4 col-md-8');
  };

  const changeDirCol = () => {
    setDir(style.dirCol);
    setColWidth('col-lg-6 col-md-8');
  };

  const { photosList: photosArray, location } = props;

  return (
    <div className="container p-0">
      {!location.pathname.includes('/photo-page')
      && (
      <div className={style.dirControl}>
        <button className={style.changeDir} type="button" onClick={changeDirCol}>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <rect width="23" height="10" fill="#BDBDBD" />
            <rect y="13" width="23" height="10" fill="#BDBDBD" />
          </svg>
        </button>
        <button className={style.changeDir} type="button" onClick={changeDirRow}>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <rect width="10" height="10" fill="#BDBDBD" />
            <rect y="13" width="10" height="10" fill="#BDBDBD" />
            <rect x="13" width="10" height="10" fill="#BDBDBD" />
            <rect x="13" y="13" width="10" height="10" fill="#BDBDBD" />
          </svg>
        </button>
      </div>
      )}
      <div className={`${dir} row mr-md-0 ml-md-0`}>
        <div className={`${colWidth} p-0`}>
          {!!photosArray
              && photosArray.map((item, index) => {
                if (index % 3 === 1 || index === 1) {
                  return <Photo item={item} key={item.id} />;
                }
                return '';
              })}
        </div>
        <div className={`${colWidth} p-0`}>
          {!!photosArray
            && photosArray.map((item, index) => {
              if (index % 3 === 2 || index === 2) {
                return <Photo item={item} key={item.id} />;
              }
              return '';
            })}
        </div>
        <div className={`${colWidth} p-0`} style={{ marginRight: '-10px' }}>
          {!!photosArray
            && photosArray.map((item, index) => {
              if (index % 3 === 0) {
                return <Photo item={item} className="mr-0" key={item.id} />;
              }
              return '';
            })}
        </div>
      </div>
    </div>
  );
});

export default PhotosList;
