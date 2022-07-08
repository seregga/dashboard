import { createSlice } from "@reduxjs/toolkit";

import mainIcon from './../../assets/icons/mainIcon.png'
import tasksIcon from './../../assets/icons/tasksIcon.svg'

const initialState = {
    navBarElems: [
        { id: 1, name: 'Главная', path: '/', icon: mainIcon },
        { id: 2, name: 'Поставки', path: '/supplys', icon: tasksIcon },
        { id: 3, name: 'Задачи', path: '/tasks', icon: tasksIcon },
        { id: 4, name: 'Заметки', path: '/notes', icon: tasksIcon },
    ]
}


const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        setNavBar(state) {
            state.navBarElems = initialState.navBarElems
            console.log(state.navBarElems);
        },
        hideNavBar(state) {
            state.navBarElems = []
            console.log(state.navBarElems);
        }
    },
})

export const { setNavBar, hideNavBar } = navBarSlice.actions;

export default navBarSlice.reducer;