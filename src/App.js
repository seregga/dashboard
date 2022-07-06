import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import NavBarContainer from './components/NavBar/NavBarContainer';
// import HeaderContainer from './components/Header/HeaderContainer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import Supplys from './pages/Supplys/Supplys';
import Tasks from './pages/Tasks/Tasks';
import Regions from './pages/Regions/Regions';

function App() {
    return (
        <div className="app-wrapper">
            {/* <HeaderContainer /> */}
            <NavBarContainer />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/' element={< HomePageContainer />} />
                    <Route exact path='/supplys' element={<Supplys />} />
                    <Route exact path='/tasks' element={<Tasks />} />
                    <Route exact path='/regions' element={<Regions />} />
                </Routes>

            </div>
        </div>
    );
}

export default App;
