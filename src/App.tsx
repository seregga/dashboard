import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import NavBarContainer from './components/navBar/NavBarContainer';
import HeaderContainer from './components/header/HeaderContainer';
import HomePageContainer from './pages/homePage/HomePageContainer';
import Supplys from './pages/supplys/Supplys';
import Tasks from './pages/tasks/Tasks';
import Notes from './pages/notes/Notes';
import Tickets from './pages/tickets/Tickets';
import Staff from './pages/staff/Staff';

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavBarContainer />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={< HomePageContainer />} />
                    <Route path='/dashboard' element={< HomePageContainer />} /> // костыль для gh-pages
                    <Route path='/supplys' element={<Supplys />} />
                    <Route path='/tasks' element={<Tasks />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/tickets' element={<Tickets />} />
                    <Route path='/staff' element={<Staff />} />
                </Routes>

            </div>
        </div>
    );
}

export default App;
