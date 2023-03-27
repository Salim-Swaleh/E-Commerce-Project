import { createSelector } from "reselect"; //Ensures that as long as inputs have not changed, outputs will remain the same

// The first selector, selectCategoryReducer, is a simple function that takes the state as its input and returns the categories slice of the state.
const selectCategoryReducer = (state) => state.categories;

// The second selector, selectCategories, uses the createSelector function from the Reselect library to derive a new piece of data from the categories slice. 
//It takes the selectCategoryReducer selector as its input, and returns the categories array from the categories slice.
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.categories
);

//// The third selector, selectCategoriesMap, also uses the createSelector function to derive a piece of data that represents a mapping of category titles to their corresponding items.
// It takes the selectCategories selector as its input, and uses the reduce() method to accumulate the mapping.
// For each category in the categories array, it extracts the title and items properties, converts the title to lowercase,
// and adds a new key-value pair to the accumulated object using the title as the key and the items as the value.
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


// Overall, these selectors provide a structured and efficient way to extract data from the categories slice of the Redux store, 
//and can be used to simplify the logic of React components that depend on that data. 
//The Reselect library helps to optimize the performance of these selectors by memoizing their output, 
//so that they are only recomputed when their inputs have changed.