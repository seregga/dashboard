import { configureStore } from '@reduxjs/toolkit'
import navBarSlice from './slices/navBarSlice'
import notesSlice from './slices/notesSlice'

export const store = configureStore({
    reducer: {
        navBar: navBarSlice,
        notes: notesSlice
    }
})