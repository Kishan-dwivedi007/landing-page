function ValidateForm(){
    let firstName = document.forms['myForm']['fname'].value;
    let lastName = document.forms['myForm']['lname'].value;
    let password = document.forms['myForm']['password'].value;
    let confirmPass = document.forms['myForm']['confirmPassword'].value;
    let text;
    if(firstName == ""){
        text="Input invalid";
        document.getElementById('fn').innerHTML=text;
    }
    if(lastName == ""){
        text="Input invalid";
        document.getElementById('ln').innerHTML=text;
    }

    if(password == confirmPass){
        return true
    }
    else{
       document.getElementById('confirmpass').innerHTML="password does't match" 
    }
}