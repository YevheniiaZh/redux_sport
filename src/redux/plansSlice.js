import { createSlice } from '@reduxjs/toolkit'

export const plansSlice = createSlice({
    name: 'plans',
    initialState:{
        selectedCategory: "Get Fit"
    },
    reducers:{
    filterCategory: (state, action) => {
    state.selectedCategory = action.payload;
}
    }
})

export const getSelectedCategory = state =>state.plans.selectedCategory;
export const {filterCategory} = plansSlice.actions;
export default plansSlice.reducer;