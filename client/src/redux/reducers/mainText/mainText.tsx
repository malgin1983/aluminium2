import { createSlice} from "@reduxjs/toolkit";

export interface IMainText {
    text: Array<string>;
    loading: boolean;
    error: any;
    recipes: Array<unknown>;
}
export const initialState = {
    loading: false,
    error: false,
    recipes: [],
    text: ['text 1', 'text 2']
}
const recipesSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        getRecipes: state => {
            state.loading = true
        },
        getRecipesSuccess: (state, { payload }) => {
            state.recipes = payload
            state.loading = false
            state.error = false
        },
        getRecipesFailure: state => {
            state.loading = false
            state.error = true
        },
        addText: (state: IMainText, action) => {
            state.text.push(...action.payload)
            state.loading = false
            state.error = false
        },

        removeText: (state: IMainText, action) => {
            state.text = state.text?.filter((item) => item !== action.payload)
            state.loading = false
            state.error = false
        }
    },
})


export const { getRecipes, getRecipesSuccess, getRecipesFailure, addText, removeText } = recipesSlice.actions
export default recipesSlice.reducer
