import React from 'react';
import { useQuery } from 'react-query';
import PhotosAPI from '../../api';
import PhotosList from '../PhotosList/PhotosList';
// import style from './Favorites.module.css';

const Favorites = () => {
  const favoritesList = JSON.parse(localStorage.getItem('Favorites'));
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
  console.log(getListFromFavorites(favoritesList));
  return (
    <>
      <PhotosList photosList={getListFromFavorites(favoritesList)} />
    </>
  );
};

export default Favorites;
