import { combineReducers } from '@reduxjs/toolkit'
import textReducer from "../reducers/mainText/mainText";

export const rootReducer = combineReducers({
    text: textReducer,
})
