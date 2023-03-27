import DirectoryItem from '../Directoryitem/directory-item.component';

import './directory.styles.scss';
/* initializing variable array */
const categories = [
    
  {
    id: 1,
    title: 'Kits',
    imageURL: 'https://mandevu.co.ke/wp-content/uploads/2020/06/Mandevu_December2022-7-1-819x1024.jpg',
    route: 'shop/kits',
  },
  {
  id: 2,
  title: 'Combos',
  imageURL: 'https://mandevu.co.ke/wp-content/uploads/2021/12/Mandevu_December2022-11-819x1024.jpg',
  route: 'shop/combos',
  },
  {
    id: 3,
    title: 'Singles',
    imageURL: 'https://mandevu.co.ke/wp-content/uploads/2019/12/Mandevu-Beard-Comb-600x750.jpg',
    route: 'shop/singles',
    },
    {
    id:4,
    title: 'Assist',
    imageURL: 'https://cdn.pixabay.com/photo/2020/03/31/01/58/no-shave-4985994_960_720.png',
    route: 'assist',
    }


];
// This is a functional component named Directory
const Directory = () => {
  // The component returns a div with class 'directory-container'
  // Inside the div, a map function is called on 'categories' array 
    return(
        <div className="directory-container">
      {categories.map(( category ) => (
         // For each category in the 'categories' array, the component DirectoryItem is rendered with the following props
        // 'key' is set to the id of the category
        // 'category' is set to the category object
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </div>
    )
};
// The Directory component is exported as the default export from this module
export default Directory