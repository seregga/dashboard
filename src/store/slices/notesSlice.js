import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: []
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes(state, action) {
            state.notes = action.payload
        },
    }
})

export const { setNotes, setIsEdit } = notesSlice.actions;

export default notesSlice.reducer;