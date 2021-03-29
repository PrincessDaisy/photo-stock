import React from 'react';
import { useQuery } from 'react-query';
import PhotosAPI from '../../api';
// eslint-disable-next-line import/no-cycle
import PhotosList from '../PhotosList/PhotosList';
import style from './Favorites.module.css';

const Favorites = () => {
  let favoritesList;

  if (JSON.parse(localStorage.getItem('Favorites')).length > 0) {
    favoritesList = JSON.parse(localStorage.getItem('Favorites'));
  } else if (JSON.parse(localStorage.getItem('Favorites')).length === 0) {
    return (
      <>
        <div className="container">
          <h2 className={style.heading}>Избранное</h2>
        </div>
      </>
    );
  }

  const getListFromFavorites = (arr) => {
    const fetchedData = [];
    const fetchPhoto = async (itemId) => {
      const { data } = await PhotosAPI.getPhoto(itemId);
      return data;
    };
    arr.forEach((item) => {
      const { data: photoData, isSuccess: photoFetchSuccess } = useQuery(['photo', item], () => fetchPhoto(item));
      if (photoFetchSuccess) {
        fetchedData.push(photoData);
      }
    });
    return fetchedData;
  };

  const fetchedData = getListFromFavorites(favoritesList);

  return (
    <>
      <div className="container">
        <h2 className={style.heading}>Избранное</h2>
        <PhotosList
          photosList={fetchedData}
        />
      </div>
    </>
  );
};

export default Favorites;
