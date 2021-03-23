/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PhotosAPI from '../../api';
import style from './PhotoPage.module.css';
import toFav from '../../assets/icons/to_favorites_photo_page.png';
import donwload from '../../assets/icons/download_photo_page.png';
import PhotosList from '../PhotosList/PhotosList';

const PhotoPage = (props) => {
  const [className, setClassName] = useState(style.imgRegular);

  const { match: { params: { id: itemId } } } = props;

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

  if (photoFetchSuccess && collectionsFetchSuccess) {
    return (
      <>
        <form action="" />
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
                <div className={style.toFav}>
                  <img src={toFav} alt="" />
                </div>
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
                      <div className={style.tagItem}>
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
