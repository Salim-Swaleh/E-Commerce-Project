import './form-input.styles.scss';
const FormInput = ({label,...otherProps}) =>{
    return(
        <div className="group">
            <input className='form-input'{...otherProps}/>
            {
                label && (
             <label 
             className={`${otherProps.value.length? `shrink`:''}form-input-label`}>
                {label}
             </label>
             )}
            {/* On the above code, when the length of the label is greater than zero/exists, it will append the shrink class, otherwise 
            append and empty string. Also add the class form-input-label*/}
                
        

        
             
        </div>       

    );
};

export default FormInput;