import { createSelector } from "reselect"; //Ensures that as long as inputs have not changed, outputs will remain the same

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => 
    categories.reduce((acc, category)=>{
      const{title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, 
    {})
);


