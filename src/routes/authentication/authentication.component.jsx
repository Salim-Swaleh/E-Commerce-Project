
import SignUpForm from '../../Components/sign-up-form/sign-up-form.component';
import SignInForm from '../../Components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

//The Authentication component serves as a parent component that renders both the SignInForm and SignUpForm components in the same view. 
//This makes it easier for users to switch between the two forms and also helps keep the code more organized.
const Authentication = () => {
    

    return(
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};

export default Authentication;