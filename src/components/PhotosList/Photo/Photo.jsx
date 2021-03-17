/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
// import { NavLink } from 'react-router-dom';
import style from './Photo.module.css';
import toFavorites from '../../../assets/icons/to_favorites.png';
import download from '../../../assets/icons/download.png';
import maximize from '../../../assets/icons/maximize.png';

const Photo = (props) => {
  const { item } = props;
  const toFavotiresFunc = (id) => {
    let FavArr = JSON.parse(localStorage.getItem('Favorites'));
    if (FavArr.includes(id)) {
      FavArr = FavArr.filter((val) => val !== id);
      localStorage.setItem('Favorites', JSON.stringify(FavArr));
    } else {
      FavArr = [...FavArr, id];
      localStorage.setItem('Favorites', JSON.stringify(FavArr));
    }
  };
  return (
    <div key={item.id} className={style.imgWrap}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={style.photoImage}
      />
      <div className={style.infoWrap}>
        <div className={style.userProfile}>
          <div className={style.userPhoto}>
            <img src={item.user.profile_image.medium} alt={`${item.user.name}_profile_image`} />
          </div>
          <div>
            <div>{item.user.name}</div>
            {!!item.user.instagram_username
                && (
                <a
                  href={`https://instagram.com/${item.user.instagram_username}`}
                  rel="noreferrer"
                  target="_blank"
                  className={style.link}
                >
                  {`@${item.user.instagram_username}`}
                </a>
                )}
          </div>
        </div>
        <div className={style.actionIcons}>
          <div>
            <button type="button" onClick={() => toFavotiresFunc(item.id)} className={style.toFavorites}>
              <img src={toFavorites} alt="" />
            </button>
          </div>
          <div>
            <a href={`/photo-page/${item.id}`}>
              <img src={maximize} alt="" />
            </a>
          </div>
          <div>
            <a
              href={`${item.links.download}?force=true`}
              rel="noreferrer"
              target="_blank"
              download
            >
              <img src={download} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
