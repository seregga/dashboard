import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes(state, action) {
            state = state.push(action.payload)
        }
    }
})

export const { setNotes } = notesSlice.actions;

export default notesSlice.reducer;