import { createSlice } from "@reduxjs/toolkit";

import mainIcon from './../../assets/icons/mainIcon.png'
import tasksIcon from './../../assets/icons/tasksIcon.svg'
import deliveryIcon from './../../assets/icons/truck.png'
import flyFiterIcon from './../../assets/icons/airplane-flight.svg'
import notesIcon from './../../assets/icons/notes.png'
import staff from './../../assets/icons/staff.png'

const initialState = {
    navBarElems: [
        { id: 1, name: 'Главная', path: '/', icon: mainIcon },
        { id: 2, name: 'Поставки', path: '/supplys', icon: deliveryIcon },
        { id: 3, name: 'Задачи', path: '/tasks', icon: tasksIcon },
        { id: 4, name: 'Заметки', path: '/notes', icon: notesIcon },
        { id: 5, name: 'Билеты', path: '/tickets', icon: flyFiterIcon },
        { id: 6, name: 'Сотрудники', path: '/staff', icon: staff },
    ]
}


const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        setNavBar(state) {
            state.navBarElems = initialState.navBarElems
        },
        hideNavBar(state) {
            state.navBarElems = []
        }
    },
})

export const { setNavBar, hideNavBar } = navBarSlice.actions;

export default navBarSlice.reducer;