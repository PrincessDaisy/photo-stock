/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Photo.module.css';
import toFavorites from '../../../assets/icons/to_favorites.png';
import download from '../../../assets/icons/download.png';
import maximize from '../../../assets/icons/maximize.png';

const Photo = (props) => {
  const toFavotires = () => {
    if (localStorage.getItem('Favorites') === '') {
      localStorage.setItem('Favorites', JSON.stringify([props.item.id]));
    } else {
      const fav = JSON.parse(localStorage.getItem('Favorites'));
      localStorage.setItem('Favorites', JSON.stringify([props.item.id, ...fav]));
    }
  };
  return (
    <div key={props.item.id} className={style.imgWrap}>
      <img
        src={props.item.urls.small}
        alt={props.item.alt_description}
        className={style.photoImage}
      />
      <div className={style.infoWrap}>
        <div className={style.userProfile}>
          <div className={style.userPhoto}>
            <img src={props.item.user.profile_image.medium} alt={`${props.item.user.name}_profile_image`} />
          </div>
          <div>
            <div>{props.item.user.name}</div>
            {!!props.item.user.instagram_username
                && (
                <a
                  href={`https://instagram.com/${props.item.user.instagram_username}`}
                  rel="noreferrer"
                  target="_blank"
                  className={style.link}
                >
                  {`@${props.item.user.instagram_username}`}
                </a>
                )}
          </div>
        </div>
        <div className={style.actionIcons}>
          <div>
            <button type="button" onClick={toFavotires} className={style.toFavorites}>
              <img src={toFavorites} alt="" />
            </button>
          </div>
          <div>
            <NavLink to={{
              pathname: `/photo-page/${props.item.id}`,
              props: { item: props.item },
            }}
            >
              <img src={maximize} alt="" />
            </NavLink>
          </div>
          <div>
            <a
              href={`${props.item.links.download}?force=true`}
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
