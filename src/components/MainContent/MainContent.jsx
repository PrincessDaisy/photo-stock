import {
  React, useState,
} from 'react';
import { Route } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import PhotosList from '../PhotosList/PhotosList';
import PhotosAPI from '../../api';
import Preloader from '../Preloader/Preloader';
import PhotoPage from '../PhotoPage/PhotoPage';

const MainContent = () => {
  if (!localStorage.getItem('Favorites')) {
    localStorage.setItem('Favorites', []);
  }

  const [searchVal, setSearchVal] = useState('random');

  const fetchPhotosList = async (value, page) => {
    const { data: { results } } = await PhotosAPI.getPhotosList(value, page);
    return results;
  };

  const {
    data: photosListData,
    isSuccess: isSuccessPhotosListFetch,
    isLoading,
    // fetchNextPage,
  } = useInfiniteQuery(['projects', searchVal], ({ pageParam = 1 }) => fetchPhotosList(searchVal, pageParam), {
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  // const handleScroll = () => {
  //   if (window.innerHeight
  //       + document.documentElement.scrollTop === document.documentElement.offsetHeight
  //   ) {
  //     fetchNextPage();
  //   }
  // };
  // window.addEventListener('scroll', handleScroll);

  return (
    <>
      <Header setSearchVal={setSearchVal} />
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/home">
        {!!isSuccessPhotosListFetch
          && <PhotosList photosList={photosListData.pages.flat()} />}
        {!!isLoading && <Preloader />}
      </Route>
      <Route path="/photo/:id" component={PhotoPage} />
      <Route path="/history">
        {!!isSuccessPhotosListFetch
          && <PhotosList photosList={photosListData.pages.flat()} />}
        {!!isLoading && <Preloader />}
      </Route>
    </>
  );
};

export default MainContent;
