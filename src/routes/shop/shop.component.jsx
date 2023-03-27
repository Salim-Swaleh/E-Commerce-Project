import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories} from '../../store/categories/category.reducer';

import './shop.styles.scss';

// The Shop component is a parent component that contains nested routes for displaying the different categories of items available for purchase.
const Shop =() =>{ 
    // The useDispatch hook is used to dispatch the action for setting the categories in the Redux store.
    const dispatch = useDispatch();
    // The useEffect hook is used to retrieve the categories from the Firebase database and set them in the Redux store.
    useEffect(()=>{
        const getCategoriesMap = async() =>{ 
            const categoriesArray = await getCategoriesAndDocuments('categories');
                      dispatch(setCategories(categoriesArray));
     };
     getCategoriesMap();
    }, []); 

    // Nested route 
    return(
        // The Routes component is used to define the nested routes for the shop page.
        <Routes>
            {/* The index route displays the CategoriesPreview component, which displays the different categories of items available for purchase. */}
            <Route index element={<CategoriesPreview/>}/>
        {/* The :category route displays the Category component, which displays the individual items in the selected category. */}
            <Route path=':category' element ={<Category/>}/>
        </Routes>
        
    );

}

export default Shop;