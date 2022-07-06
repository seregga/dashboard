import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import NavBarContainer from './components/navBar/NavBarContainer';
// import HeaderContainer from './components/header/HeaderContainer';
import HomePageContainer from './pages/homePage/HomePageContainer';
import Supplys from './pages/supplys/Supplys';
import Tasks from './pages/tasks/Tasks';
import Regions from './pages/regions/Regions';

function App() {
    return (
        <div className="app-wrapper">
            {/* <HeaderContainer /> */}
            <NavBarContainer />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/' element={< HomePageContainer />} />
                    <Route exact path='/dashboard' element={< HomePageContainer />} /> // костыль для gh-pages
                    <Route exact path='/supplys' element={<Supplys />} />
                    <Route exact path='/tasks' element={<Tasks />} />
                    <Route exact path='/regions' element={<Regions />} />
                </Routes>

            </div>
        </div>
    );
}

export default App;
