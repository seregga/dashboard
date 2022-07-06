import { combineReducers, configureStore } from '@reduxjs/toolkit'
import navBarSlice from './slices/navBarSlice'

const rootReucer = combineReducers({
    navBar: navBarSlice
})

export const store = configureStore({
    reducer: rootReucer
})
// export const store = configureStore({
//     reduser: {
//         navBar: navBarSlice
//     }
// })