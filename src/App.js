import logo from './logo.svg';
import './App.css';
import  PhotosAPI  from './api';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import MainContent from './components/MainContent/MainContent';

function App() {
  // let getPhoto = PhotosAPI.getPhotosList(1, "random")
  // // let getTopic = PhotosAPI.getTopicList(1)
  // console.log(getPhoto)
  return (
    <BrowserRouter>
        <div className="App">
          <MainContent />
        </div>
    </BrowserRouter>
  );
}

export default App;
