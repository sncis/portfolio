import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DataStateProvider } from './store/dataContext';
import ToggleMenu from './components/ToggleMenu';
import MeSection from './components/MeSection'
import ImagePage from './components/ImagePage'
import HomePage from './comp/HomePage';
import CVPage from './comp/CVPage';
import AboutPage from './comp/AboutPage';
import ProjectPage from './comp/ProjectPage';
import ProjectDetails from './comp/ProjectDetails';


function App() {
  return (
    <div className="App">
      <DataStateProvider>
        <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<ToggleMenu />} /> */}
          <Route path='/' exact element={<HomePage />} />
          <Route path='/el' element={<ImagePage />} />
          <Route path='/cv' element={<CVPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projectDetails' element={<ProjectDetails />} />


          {/* <Route path='/me' element={<MeSection />} /> */}
        </Routes>
        </BrowserRouter>
      </DataStateProvider>     
    </div>
  );
}

export default App;
