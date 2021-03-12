/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import PhotosAPI from './api';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import MainContent from './components/MainContent/MainContent';
import { QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="App">
            <MainContent />
          </div>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </>
  );
}

export default App;
