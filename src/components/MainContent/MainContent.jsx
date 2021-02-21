import { React, useReducer, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import Favorites from '../Favorites/Favorites'
import Header from '../Header/Header'
import PhotosList from '../PhotosList/PhotosList'
import  PhotosAPI  from '../../api';
import MainContentReducer, { setSearchValue } from '../../Reducers/MainContentReducer';
import useInfiniteScroll from "./../../functions/useInfiniteScroll";
import Preloader from '../Preloader/Preloader'
import PhotoPage from '../PhotoPage/PhotoPage'

const MainContent = () => {
    const [state, dispatch] = useReducer(MainContentReducer, {photosList: null,topicList: null,searchVal:null})
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    const objProp = {
        setSearchValue(val) {dispatch(setSearchValue(val))}
    }
    localStorage.setItem("Favorites", [])
    window.state = state
    let page = 1;
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await PhotosAPI.getTopicList(1)
    //         dispatch({ type: "GET-TOPIC-LIST", topicList: result.data })
    //     }
    //     fetchData()
    // }, [])
    useEffect(() => {
        const fetchData = async () => {
            const result = await PhotosAPI.getPhotosList(1, state.searchVal)
            dispatch({ type: "GET-PHOTO-LIST", photosList: result.data.results })
        }
        fetchData()
    }, [state.searchVal])
    function fetchMoreListItems() {
        page++;
        const fetchData = async () => {
            const result = await PhotosAPI.getPhotosList(page, state.searchVal)
            dispatch({ type: "GET-MORE-PHOTO", photosList: result.data.results });
            setIsFetching(false);
        }
        fetchData();
      }
    return <>
        <Header searchFunction={objProp.setSearchValue}/>
        <Route path='/favorites'>
            <Favorites />
        </Route>
        {/* <Route path='/'>
            <Redirect to='/home' />
        </Route> */}
        <Route path='/home'>
            <PhotosList photosList={state.photosList} />
            {!!isFetching && <Preloader />}
        </Route>
        <Route path='/photo-page/:id' component={PhotoPage}/>
    </>
}

export default MainContent
