import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCitys } from './../../http/citysApi';


export const fetchCitys = createAsyncThunk('citys/fetchCitys', async () => {
    const { data } = await getAllCitys()
    return data
})

const initialState = {
    citys: [
        { id: 1, title: 'Санкт-Петеребург' },
        { id: 2, title: 'Москва' },
        { id: 3, title: 'Екатеринбург' },
        { id: 4, title: 'Краснодар' },
        { id: 5, title: 'Новосибирск' },
        { id: 6, title: 'Хабаровск' },
        { id: 7, title: 'Геленджик' },
        { id: 8, title: 'Севастополь' },
    ],
    status: 'loading'
}

const citysSlice = createSlice({
    name: 'citys',
    initialState,
    reducers: {
        setCitys(state, action) {
            state.citys = action.payload
        }
    },
    extraReducers: {
        [fetchCitys.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchCitys.fulfilled]: (state, action) => {
            state.citys = action.payload
            state.status = 'success'
        },
        [fetchCitys.rejected]: (state, action) => {
            state.status = 'error'
            state.citys = []
        },
    }
})

export const { setCitys } = citysSlice.actions;

export default citysSlice.reducer;