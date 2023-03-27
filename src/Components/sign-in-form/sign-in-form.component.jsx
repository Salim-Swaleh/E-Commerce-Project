import{useState} from 'react';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';



 
import { signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword,
    } 
    from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

// Define the default form fields object with empty email and password fields
const defaultFormFields = {
    email:'',
    password:'',

};

// Define the functional component SignInForm
const SignInForm = ( ) =>{
    
    
  // Set the state of formFields to defaultFormFields
    const [formFields, setFormFields] = useState(defaultFormFields);
    // Destructure email and password from the formFields object
    const { email, password } = formFields;

    
    // Define a function to reset the form fields back to the default values
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    };

    // Define a function to sign in the user with their Google account
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    
    };
   
    // Define a function to handle form submission and sign in the user with email and password
    const handleSubmit = async(event) => {
        event.preventDefault();

        
        try {
            await signInAuthUserWithEmailAndPassword(email,password);//signInAuth..... is a predefined function from firebase.utils
             resetFormFields();
            
            
        } catch(error){
            // Handle error cases
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect Password');
                    break
                case 'auth/user-not-found':
                    alert('no user found');
                    break;
                default:
                    console.log(error);
            }
           
            
        
        }

    };
 
     // Define a function to update formFields when the user types into the form input fields
    const handleChange = (event) => {
        const{name, value} = event.target;

        setFormFields({...formFields, [name]:value});

    };
 
     // Render the sign-in form with email and password inputs, submit and Google sign-in buttons
    return(
        <div className='sign-in-container'>
            <h2>Existing User</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={ handleSubmit} >

                <FormInput 
                label="Email"
                type= "email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email}/>

                <FormInput 
                label="Password"
                type="password" 
                required
                 onChange={handleChange} 
                 name="password" 
                 value={password}/>

                 <div className='buttons-container'>
                   <Button type="submit">Sign In </Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In </Button> 
                 </div>

            </form>
        </div>
    );
    

};

export default SignInForm;