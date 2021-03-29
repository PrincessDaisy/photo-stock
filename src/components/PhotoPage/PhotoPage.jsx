/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import PhotosAPI from '../../api';
import style from './PhotoPage.module.css';
import donwload from '../../assets/icons/download_photo_page.png';
import PhotosList from '../PhotosList/PhotosList';

const PhotoPage = (props) => {
  const { match: { params: { id: itemId } } } = props;

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    setRefresh(!refresh);
  }, []);

  const [className, setClassName] = useState(style.imgRegular);

  const [inFavList, setInFavList] = useState(false);

  // setInFavList(true);

  const toFavotiresFunc = (id) => {
    let FavArr;
    if (JSON.parse(localStorage.getItem('Favorites')).length > 0) {
      FavArr = JSON.parse(localStorage.getItem('Favorites'));
      if (FavArr.includes(id)) {
        FavArr = FavArr.filter((val) => val !== id);
        localStorage.setItem('Favorites', JSON.stringify(FavArr));
        setInFavList(false);
      } else {
        FavArr = [...FavArr, id];
        localStorage.setItem('Favorites', JSON.stringify(FavArr));
        setInFavList(true);
      }
    } else {
      localStorage.setItem('Favorites', JSON.stringify([id]));
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('Favorites')).length > 0) {
      const checkFav = (id) => {
        const FavArr = JSON.parse(localStorage.getItem('Favorites'));
        return setInFavList(FavArr.includes(id));
      };
      checkFav(itemId);
    }
  }, [inFavList]);

  const fetchPhoto = async (id) => {
    const { data } = await PhotosAPI.getPhoto(id);
    return data;
  };

  const fetchCollection = async (item) => {
    const { data } = await PhotosAPI.getCollections(item);
    return data;
  };

  const { data: photoData, isSuccess: photoFetchSuccess } = useQuery(['photo'], () => fetchPhoto(itemId));

  const { data: collectionsListData, isSuccess: collectionsFetchSuccess } = useQuery(
    ['collectionsList'],
    () => fetchCollection(photoData.related_collections.results[0].id),
    {
      enabled: !!photoData,
      onSuccess: () => {
        if (photoData.width < photoData.height) {
          setClassName(style.imgScaled);
        }
      },
    },
  );

  if (photoFetchSuccess && collectionsFetchSuccess && !refresh) {
    return (
      <>
        <div className="container p-0">
          <div className={style.photoInfo}>
            <div className={style.infoTop}>
              <div className={style.userInfo}>
                <div className={style.userProfileImg}>
                  <img src={photoData.user.profile_image.medium} alt="" />
                </div>
                <div className={style.userProfile}>
                  <div className={style.userName}>
                    {photoData.user.name}
                  </div>
                  <div className={style.userLink}>
                    {!!photoData.user.instagram_username
                    && (
                    <a
                      href={`https://instagram.com/${photoData.user.instagram_username}`}
                      target="_blank"
                      rel="noreferrer"
                      className={style.link}
                    >
                      {`@${photoData.user.instagram_username}`}
                    </a>
                    )}
                  </div>
                </div>
              </div>
              <div className={style.imgActions}>
                <button className={style.toFav} type="button" onClick={() => { toFavotiresFunc(itemId); }}>
                  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <rect x="4" y="4" width="49.244" height="49.244" rx="8" fill="white" />
                    </g>
                    <path d="M30.5782 38.9207C29.6142 39.796 28.1302 39.796 27.1661 38.9081L27.0266 38.7812C20.3674 32.7562 16.0166 28.8114 16.1815 23.8898C16.2576 21.7335 17.3612 19.666 19.1497 18.4483C22.4983 16.1651 26.6334 17.2306 28.8658 19.8435C31.0983 17.2306 35.2334 16.1524 38.582 18.4483C40.3705 19.666 41.4741 21.7335 41.5502 23.8898C41.7277 28.8114 37.3643 32.7562 30.7051 38.8066L30.5782 38.9207Z" fill={inFavList ? 'red' : '#828282'} />
                    <defs>
                      <filter id="filter0_d" x="0" y="0" width="57.244" height="57.244" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </button>
                <div className={style.download}>
                  <a href={`${photoData.links.download}?force=true`} target="_blank" download rel="noreferrer">
                    <span className={style.downloadIcon}>
                      <img src={donwload} alt="" />
                    </span>
                    <span>
                      Download
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.imgBlock}>
              <img src={photoData.urls.regular} alt="" className={className} />
            </div>
            {!!photoData.tags.length > 0
            && (
            <div className={style.photoTags}>
              <div className={style.tagsTop}>
                <h3>
                  Похожие теги
                </h3>
              </div>
              <div className={style.tagsBlock}>
                {photoData.tags.map((i, index) => {
                  if (index < 5) {
                    return (
                      <div className={style.tagItem} key={i.id}>
                        {i.title}
                      </div>
                    );
                  }
                  return '';
                })}
              </div>
            </div>
            )}
            <div className={style.imgBackground}>
              <img src={photoData.urls.regular} alt="" />
              <div className={style.imgShadow}>&nbsp;</div>
            </div>
          </div>
          <div className={style.relatedCols}>
            <div className={style.relatedColsTop}>
              <h3 className={style.relatedColsHeading}>Похожие фотографии</h3>
              <button type="button">show more</button>
            </div>
            {!!collectionsFetchSuccess && <PhotosList photosList={collectionsListData} /> }
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default PhotoPage;
