import logo from './logo.svg';
import './App.css';
//import './styles.css';
//import './styles.scss';
//import guitarras from './data/guitarras.json';

import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer bienvenida="Bienvenido a Tiendallica!" />
    </>
  );
}

export default App;