export const email_validate = (email)=>{
    if(email === null) return "Please enter Email Id";
    return  (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? null :'Please enter valid Email Id';
    }
export const password_validate =(password) =>{
    if(password === null) return "Please enter Password";
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) ? null :'Please enter valid Password';
}
export const name_validate = (name)=>{
    return /^[A-Za-z]+(?:['-][A-Za-z]+)*$/.test(name) ? true :'Please enter valid Name';
}
 const mobile_validate = (mobile) =>{
    if(mobile === '') return "Please enter Mobile number";
    return /^\+?(\d{1,4})?[-.\s]?\(?\d{1,}\)?[-.\s]?\d{1,}[-.\s]?\d{1,}$/.test(mobile) ? null :'Please enter valid Mobile';
}
