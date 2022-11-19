import { FC } from 'react';
import { Footer, Header, Main } from './components';
import './App.css';

export const App: FC = () => {
  return <div className="App">
    <div className="red-circle" />
    <div className="purple-circle" />
    <div className="red-ball" />
    <div className="purple-ball" />
    <div className="red-ball-s" />
    <Header />
    <Main />
    <Footer />
  </div>
};
