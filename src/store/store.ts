import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../reducers/authSlice';
import globalSlice from '../reducers/general';
import candidatoSlice from '../reducers/candidatoSlice';
import jobSlice from '../reducers/jobSlice';
import serviciosSlice from '../reducers/serviciosSlice';
import contactosSlice from '../reducers/contactosSlice';
import searchSlice from '../reducers/searchSlice';



export const store = configureStore({
    reducer:{
        authSlice,
        globalSlice,
        candidatoSlice,
        jobSlice,
        serviciosSlice,
        contactosSlice,
        searchSlice
    }
}) ;

//para modo typescript de la doc de react
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch 