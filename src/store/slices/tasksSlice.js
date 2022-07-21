import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    thList: [
        { id: 1, colSpan: 1, text: 'создана задача' },
        { id: 2, colSpan: 1, text: 'в работе' },
        { id: 3, colSpan: 1, text: 'на проверке' },
        { id: 4, colSpan: 1, text: 'завершена' },
    ],
    tdList: [
        { id: 1, num: 1, draggable: true, text: 'потяни меня' },
        { id: 2, num: 2, draggable: false, text: null },
        { id: 3, num: 3, draggable: false, text: null },
        { id: 4, num: 4, draggable: false, text: null }
    ],

}

const tasksSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setTdList(state, action) {
            state.tdList
        }
    }
})

export const { } = tasksSlice.actions;

export default tasksSlice.reducer;