import './form-input.styles.scss';

//const FormInput = () => {
  //  return (
    //    <label>Display Name</label>
    //    <input 
    //   type='text' 
    //    required 
    //    onChange={handleChange} 
    //    name="displayName" 
    //    value={displayName} 
    //    />
   // )
//}


//const FormInput = ({ label, changeHandler, value }) => {
   // return (
    //    <label>{label}</label>
    //    <input 
    //   type='text' 
     //   required 
     //   onChange={changeHandler} 
     //   name="displayName" 
     //   value={displayName} 
     //   />
   // )
//}


const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            <input className='form-input'{...otherProps} />
          {label && (
            <label 
              className={`${
                 otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
            >
            {label}
          </label>    
         )}
        </div>
    );
};

export default FormInput;