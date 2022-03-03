import React from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import Layout from "./layout/Layout";
import Brandline from "./components/pagescomponents/Brandline";
import Catalog from "./components/pagescomponents/Catalog";




function App() {
  return (
    <div className="App">
        <Navbar/>
        <Catalog/>
        <Brandline/>
        <Layout/>
    </div>
  );
}

export default App;
