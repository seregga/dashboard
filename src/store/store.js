import { configureStore } from '@reduxjs/toolkit'
import navBarSlice from './slices/navBarSlice'
import notesSlice from './slices/notesSlice'
import tasksSlice from './slices/tasksSlice'

export const store = configureStore({
    reducer: {
        navBar: navBarSlice,
        notes: notesSlice,
        tasks: tasksSlice,
    }
})