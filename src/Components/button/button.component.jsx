import './button.styles.scss';
/* There are 3 buttons:
default
inverted
google sign in*/

// This is an object named BUTTON_TYPES_CLASSES, which contains two properties with string values
export const BUTTON_TYPES_CLASSES ={ 
    google: 'google-sign-in',
    inverted: 'inverted'
}

// This is a functional component named Button, which accepts several props
const Button =({children, buttonType, isLoading, ...otherProps}) =>{

    // The component returns a button element with the following attributes:
  // - 'disabled' attribute with the value of the isLoading prop
  // - 'className' attribute that concatenates the 'button-container' class with the value of the corresponding class from BUTTON_TYPES_CLASSES object, based on the buttonType prop
  // - 'otherProps' object which spreads any other props passed to the Button component
  // - the 'children' of the Button component

    return <button disabled={isLoading} className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}> {children}</button>;
    
};

// The Button component is exported as the default export from this module
export default Button;