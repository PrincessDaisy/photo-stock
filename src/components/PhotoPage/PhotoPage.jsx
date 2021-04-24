/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { PhotosAPI } from '../../api';
import style from './PhotoPage.module.css';
import PhotosList from '../PhotosList/PhotosList';

const PhotoPage = (props) => {
  const { match: { params: { id: itemId } } } = props;

  const [className, setClassName] = useState(style.imgRegular);

  const [inFavList, setInFavList] = useState(false);

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

  let collectionsId;

  const {
    data: photoData,
    isSuccess: photoFetchSuccess,
  } = useQuery([itemId], () => fetchPhoto(itemId));

  if (photoFetchSuccess) {
    collectionsId = photoData.related_collections.results[0].id;
  }

  const { data: collectionsListData, isSuccess: collectionsFetchSuccess } = useQuery(
    [collectionsId],
    () => fetchCollection(collectionsId),
    {
      enabled: !!collectionsId,
      onSuccess: () => {
        if (photoData.width < photoData.height) {
          setClassName(style.imgScaled);
        } else {
          setClassName(style.imgRegular);
        }
      },
    },
  );

  if (photoFetchSuccess && collectionsFetchSuccess) {
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
                  <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5782 21.9207C13.6142 22.796 12.1302 22.796 11.1661 21.9081L11.0266 21.7812C4.36736 15.7562 0.0166355 11.8114 0.181532 6.88984C0.257637 4.7335 1.36117 2.66596 3.14966 1.44827C6.49832 -0.834911 10.6334 0.230571 12.8658 2.84354C15.0983 0.230571 19.2334 -0.847595 22.582 1.44827C24.3705 2.66596 25.4741 4.7335 25.5502 6.88984C25.7277 11.8114 21.3643 15.7562 14.7051 21.8066L14.5782 21.9207Z" fill={inFavList ? 'red' : '#828282'} />
                  </svg>
                </button>
                <div className={style.download}>
                  <a href={`${photoData.links.download}?force=true`} target="_blank" download rel="noreferrer" className={style.donwloadLink}>
                    <span className={style.downloadIcon}>
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.2499 13.4584H23.5024C24.7633 13.4584 25.3866 14.9884 24.4941 15.8809L17.9916 22.3834C17.4391 22.9359 16.5466 22.9359 15.9941 22.3834L9.49159 15.8809C8.59909 14.9884 9.23659 13.4584 10.4974 13.4584H12.7499V6.37502C12.7499 5.59585 13.3874 4.95835 14.1666 4.95835H19.8333C20.6124 4.95835 21.2499 5.59585 21.2499 6.37502V13.4584ZM8.49992 29.0417C7.72075 29.0417 7.08325 28.4042 7.08325 27.625C7.08325 26.8459 7.72075 26.2084 8.49992 26.2084H25.4999C26.2791 26.2084 26.9166 26.8459 26.9166 27.625C26.9166 28.4042 26.2791 29.0417 25.4999 29.0417H8.49992Z" fill="white" />
                      </svg>
                    </span>
                    <span className={style.downloadText}>
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
            </div>
            {!!collectionsFetchSuccess
            && (
              <PhotosList photosList={collectionsListData} />
            )}
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default PhotoPage;
