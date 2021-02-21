import { React, useReducer, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import Favorites from '../Favorites/Favorites'
import Header from '../Header/Header'
import SearchResult from '../SearchResult/SearchResult'
import { PhotosAPI } from '../../api/api';

// const initialState = {
//     photosList: null,
//     topicList: null
// }

function MainContentReducer(state, action) {
    switch (action.type) {
        case 'GET-PHOTO-LIST':
            return { ...state, photosList: action.photosList }
        case "GET-TOPIC-LIST":
            return { ...state, topicList: action.topicList }
        default:
            return state
    }
}

const MainContent = () => {
    const [state, dispatch] = useReducer(MainContentReducer, {photosList: null,topicList: null})
    window.state = state
    useEffect(() => {
        const fetchData = async () => {
            const result = await PhotosAPI.getTopicList(1)
            dispatch({ type: "GET-TOPIC-LIST", topicList: result.data })
        }
        fetchData()
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            const result = await PhotosAPI.getPhotosList(1, "random")
            dispatch({ type: "GET-PHOTO-LIST", photosList: result.data.results })
        }
        fetchData()
    }, [])
    return <>
        <Header />
        <Route path='/favorites'>
            <Favorites />
        </Route>
        <Route path='/'>
            <Redirect to='/home' />
        </Route>
        <Route path='/home'>
            <SearchResult photosList={state.photosList} />
        </Route>
    </>
}

export default MainContent