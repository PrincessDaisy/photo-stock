import React from 'react';
import { useQuery } from 'react-query';
import PhotosAPI from '../../api';
import PhotosList from '../PhotosList/PhotosList';
import style from './Favorites.module.css';

const Favorites = () => {
  let favoritesList = null;
  if (localStorage.getItem('Favorites')) {
    favoritesList = JSON.parse(localStorage.getItem('Favorites'));
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
  return (
    <>
      <div className="container">
        <h2 className={style.heading}>Избранное</h2>
        {!!favoritesList && <PhotosList photosList={getListFromFavorites(favoritesList)} />}
      </div>
    </>
  );
};

export default Favorites;
