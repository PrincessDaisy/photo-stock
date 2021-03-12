import { React, useState } from 'react';
import { Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import PhotosList from '../PhotosList/PhotosList';
import PhotosAPI from '../../api';
import Preloader from '../Preloader/Preloader';
import PhotoPage from '../PhotoPage/PhotoPage';

const MainContent = () => {
  const [searchVal, setSearchVal] = useState('random');

  const currentPage = 1;

  const fetchPhotosList = async (value, page) => {
    const { data: { results } } = await PhotosAPI.getPhotosList(value, page);
    return results;
  };

  const { data: photosListData, isSuccess: isSuccessPhotosListFetch, isLoading } = useQuery(['photosList', searchVal, currentPage], () => fetchPhotosList(searchVal, currentPage));

  localStorage.setItem('Favorites', []);

  return (
    <>
      <Header setSearchVal={setSearchVal} />
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/home">
        {!!isSuccessPhotosListFetch && <PhotosList photosList={photosListData} />}
        {!!isLoading && <Preloader />}
      </Route>
      <Route path="/photo-page/:id" component={PhotoPage} />
    </>
  );
};

export default MainContent;
