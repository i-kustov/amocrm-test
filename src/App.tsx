import { FC } from 'react';
import { Footer, Header, Main } from './components';
import './App.css';

export const App: FC = () => {
  return <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
};
