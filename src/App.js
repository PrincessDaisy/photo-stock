/* eslint-disable */
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import { QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/photo-stock">
          <MainContent />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </>
  );
}

export default App;
