import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './styles/styles.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default App;
