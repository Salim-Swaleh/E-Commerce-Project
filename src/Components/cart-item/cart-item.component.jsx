import './cart-item.styles.scss';

//This is a functional component named CartItem which takes an object cartItem as a parameter.
const CartItem = ({cartItem}) =>{
  
    const {imageUrl, price,name, quantity} = cartItem;//The object contains the following properties 
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} /> {/*renders an image element with the source set to the imageUrl property of the cartItem object. */}
            <div className='item-details'>
        <span className='name'>{name}</span> {/*Contains the Product Name */}
        <span className='price'>
          {quantity} x Ksh {price} {/*Show the product quantity with a X sign and the product price */}
        </span>
      </div>
      </div>
    );
};

export default CartItem;