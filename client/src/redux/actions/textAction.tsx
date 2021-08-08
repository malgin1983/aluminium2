import { Dispatch} from "@reduxjs/toolkit";
import {getRecipes, getRecipesFailure, getRecipesSuccess} from "../reducers/mainText/mainText";


export const fetchRecipes = () => {
    return async (dispatch:Dispatch) => {
        dispatch(getRecipes())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await response.json()

            dispatch(getRecipesSuccess(data))
        } catch (error) {
            dispatch(getRecipesFailure())
        }
    }
}
