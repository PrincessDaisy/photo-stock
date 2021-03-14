/* eslint-disable react/prop-types */
import React from 'react';
import Photo from './Photo/Photo';
import style from './PhotosList.module.css';

const PhotosList = (props) => {
//   const [dir, setDir] = useState(style.dirRow);
//   const changeDirRow = () => {
//     setDir(style.dirRow);
//   };
//   const changeDirCol = () => {
//     setDir(style.dirCol);
//   };

  const { photosList } = props;

  const photosArray = photosList.pages.flat();
  // console.log(props);
  // console.log(photosList);
  return (
    <div className="container">
      {/* <div className={style.dirControl}>
        <div className={style.column} onClick={changeDirCol}>
          <span className={style.columnEl}>&nbsp;</span>
          <span className={style.columnEl}>&nbsp;</span>
        </div>
        <div className={style.row} onClick={changeDirRow}>
          <div className={style.rowTop}>
            <span className={style.rowEl}>&nbsp;</span>
            <span className={style.rowEl}>&nbsp;</span>
          </div>
          <div className={stylez.rowBot}>
            <span className={style.rowEl}>&nbsp;</span>
            <span className={style.rowEl}>&nbsp;</span>
          </div>
        </div>
      </div> */}
      <div className={style.dirRow}>
        <div className="col-md-4 p-0">
          {!!photosList
                    && photosArray.map((item, index) => {
                      if (index % 3 === 2) {
                        return <Photo item={item} />;
                      }
                      return '';
                    })}
        </div>
        <div className="col-md-4 p-0">
          {!!photosList
                    && photosArray.map((item, index) => {
                      if (index % 3 === 1) {
                        return <Photo item={item} />;
                      }
                      return '';
                    })}
        </div>
        <div className="col-md-4 p-0">
          {!!photosList
                    && photosArray.map((item, index) => {
                      if (index % 3 === 0) {
                        return <Photo item={item} />;
                      }
                      return '';
                    })}
        </div>
      </div>
    </div>
  );
};

export default PhotosList;
