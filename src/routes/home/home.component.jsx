import { Outlet } from "react-router-dom";
import  Directory from "../../Components/Directory/directory.components";



const Home = () => {

  /* initializing variable array */
  const categories = [
    {
      id: 1,
      title: 'Beard Oil',
      imageURL:'https://mandevu.co.ke/wp-content/uploads/2019/12/Mandevu_December2022-4-1-819x1024.jpg',
    },
    {
      id: 2,
      title: 'Beard Shampoo',
      imageURL: 'https://mandevu.co.ke/wp-content/uploads/2019/12/Mandevu-Wash-819x1024.jpg',
    },
    {
      id: 3,
      title: 'Beard Balm',
      imageURL: 'https://mandevu.co.ke/wp-content/uploads/2019/12/Mandevu13-1-819x1024.jpg',
    },
    {
      id: 4,
      title: 'Grooming Accessories',
      imageURL: 'https://mandevu.co.ke/wp-content/uploads/2020/06/Mandevu_December2022-7-1-819x1024.jpg',
    },
    {
     id: 5,
     title: ' Premium Service',
     imageURL: 'https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    },
  ];

  return (
    <div> 
        <Directory categories={categories} />;
        <Outlet />
    </div>   
  );
};

export default Home; 