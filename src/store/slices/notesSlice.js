import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [
        // id: null,
        // text: '',
        // isEdit: false,
        // pdng: null,
        // pdngTxtr: null,
    ],
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes(state, action) {
            state.notes = [...state.notes,
            {
                id: action.payload.id,
                text: '',
                isEdit: false,
                pdng: action.payload.pdng,
                pdngTxtr: null,
            }
            ]
        },
        setEditNote(state, action) {
            state.notes = state.notes.map(n => {
                if (n.id === action.payload.id) {
                    return {
                        ...n,
                        isEdit: true,
                        pdng: 0,
                        pdngTxtr: action.payload.pdngTxtr,
                    }
                } else {
                    return n
                }
            })
        },
        setEndEditNote(state, action) {
            state.notes = state.notes.map(n => {
                if (n.id === action.payload.id) {
                    return {
                        ...n,
                        isEdit: false,
                        pdng: action.payload.pdng,
                        pdngTxtr: action.payload.pdngTxtr,
                    }
                } else {
                    return n
                }
            })
        },
        setTextNote(state, action) {
            state.notes = state.notes.map(n => {
                if (n.id === action.payload.id) {
                    return {
                        ...n,
                        text: action.payload.text
                    }
                } else {
                    return n
                }
            })
        },
    }
})

export const { setNotes, setEditNote, setEndEditNote, setTextNote } = notesSlice.actions;

export default notesSlice.reducer;