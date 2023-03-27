import './form-input.styles.scss';

// receives a label and other additional props.
const FormInput = ({label,...otherProps}) =>{
    return(
        <div className="group">
            {/* Render an input element with all additional props passed to this component */}
            <input className='form-input'{...otherProps}/>

            {/* If there is a label, render it with a class of "shrink" if the input value length is greater than zero, 
            or an empty string otherwise, and add the class "form-input-label" */}
            
            {
                label && (
             <label 
             className={`${otherProps.value.length? `shrink`:''}form-input-label`}>
                {label}
             </label>
             )}
           
                
        

        
             
        </div>       

    );
};

export default FormInput;