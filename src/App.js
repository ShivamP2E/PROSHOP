import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SortMenu from './components/SortMenu/SortMenu';
import Collection from './components/Collection/Collection';

function App() {
  return (
   <>
   <Navbar />
   <SortMenu/>
   <Collection/>
   </>
  );
}

export default App;
