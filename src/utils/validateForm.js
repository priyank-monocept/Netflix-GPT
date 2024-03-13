import React from 'react'
import {email_validate,password_validate,name_validate} from "../utils/validateField";

const validateForm = (validate_email,validate_password, ...other) => {
 let[validate_name] = other;
 if(validate_name !== null && validate_name !== undefined){ 
    if(name_validate(validate_name)!== true) return name_validate(validate_name);
 }
 if(email_validate(validate_email) !== null) return email_validate(validate_email);
 if(password_validate(validate_password) !== null) return password_validate(validate_password);
 return null; 
}

export default validateForm