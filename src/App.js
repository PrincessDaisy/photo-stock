/* eslint-disable */
import './App.css';
import { HashRouter } from 'react-router-dom';
import MainContent from './components/MainContent/MainContent';
import { QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <div className="App">
            <MainContent />
          </div>
        </HashRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </>
  );
}

export default App;
