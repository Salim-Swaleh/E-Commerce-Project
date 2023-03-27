import{useState} from 'react';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';
 
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';



import './sign-up-form.styles.scss';
// Define the default form fields with empty values.
const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',

};


const SignUpForm = ( ) =>{
    // Use state to manage the form fields and set the default values.
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

  

    // Function to reset the form fields to their default values.
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    };

    // Function to handle form submission.
    const handleSubmit = async(event) => {
        event.preventDefault();

        // Check if the passwords match before submitting the form.
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try {
            // Create a new user account with email and password.
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            // Create a new user document in the database with display name.
            await createUserDocumentFromAuth(user, {displayName});
            // Reset the form fields after successful sign-up.
            resetFormFields();
            

        } catch(error){
            if(error.code=== 'auth/email-already-in-use'){
                alert('email already in use!'); // will notify user if they are creating an account with an already in use email
            }else if(error.code==='auth/weak-password'){
                alert('Password should be atleast 6 characters'); //will notify user to use a password with at least 6 char
            }else{
                console.log('user creation encountered an error', error);
            }
            

        }

    };

     // Function to handle form field changes and update the state.
    const handleChange = (event) => {
        const{name, value} = event.target;

        setFormFields({...formFields, [name]:value});

    };

    // Render the sign-up form.
    return(
        <div className='sign-up-container'>
            <h2>New User?</h2>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={ handleSubmit} >
                
                <FormInput 
                label="Display Name"
                type="text" 
                required 
                onChange={handleChange} 
                name="displayName"
                 value={displayName}/>

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

                <FormInput
                label="Confirm Password" 
                type="password" 
                required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword}/>

                <Button type="submit">Sign Up </Button>

            </form>
        </div>
    );
};

export default SignUpForm;