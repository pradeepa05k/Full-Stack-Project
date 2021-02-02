
function validateName(){
    var vname = document.getElementById("rname").value;
    var format = /^[a-zA-Z]*$/;

    console.log(vname.match(format));
    if(vname.match(format)){
        Ename.innerHTML = "";
    }
    else{                
        Ename.innerHTML = "Enter a valid name";
    }
}

function validateRoll(){
    var rn = document.getElementById("roll").value;
    var len = rn.length;

    if(len==0 || len==null){
        Eroll.innerHTML = "Roll number is mandatory";
    }
    else{
        Eroll.innerHTML = "";
    }

}

function validateEmail(){
    var mailid = document.getElementById("mail").value;
    
    var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(mailid.match(format)){
        EmailErr.innerHTML = "";
    }
    
    else{
        EmailErr.innerHTML = "Enter a valid Email Id";
    }
                
}

function validatePassword(){            
    var pword = document.getElementById("pwd").value;
    var format = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,12}";
    // var format = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/";
    
    if(pword.match(format)){
        Epass.innerHTML = "";
    }
    else{
        Epass.innerHTML = "Invalid password \n Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character."
    }
}

function validateConfirmPassword(){     
    var password = document.getElementById("pwd").value;          
    var confirmPassword = document.getElementById("conf").value;

    if(password==confirmPassword){
        Cpass.innerHTML = "";
    }
    else{                
        Cpass.innerHTML = "Password and confirm password must be same";
    }
}

function validateGend(){
    for(let i=0; i<gender.length; i++){
        if(gender[i].checked){
            flag=1;
            gflag=1;
            break;
        }
    }
    if(gflag==1){
        Egend.innerHTML = "";
    }
    else{
        Egend.innerHTML = "Gender is mandatory";
    }
}

function validate(){
    console.log("debug")
    var flag = 0;
    if(rname.value){
        flag=1;
        Ename.innerHTML = "";
    }
    else{
        flag=0;
        Ename.innerHTML = "Field is Required";
    }
    if(roll.value){
        flag=1;
        Eroll.innerHTML = "";
    }
    else{
        flag=0;
        Eroll.innerHTML = "Field is Required";
    }
    if(mail.value){
        flag=1;
        EmailErr.innerHTML = "";
    }
    else{
        flag=0;
        EmailErr.innerHTML = "Field is Required";
    }
    if(pwd.value){
        flag=1;
        Epass.innerHTML = "";
    }
    else{
        flag=0;
        Epass.innerHTML = "Field is Required";
    }
    if(conf.value){
        flag=1;
        Cpass.innerHTML = "";
    }
    else{
        flag=0;
        Cpass.innerHTML = "Field is Required";
    }
    var gflag=0;
    for(let i=0; i<gender.length; i++){
        if(gender[i].checked){
            flag=1;
            gflag=1;
            break;
        }
    }
    if(gflag==1){
        flag=1;
        Egend.innerHTML = "";
    }
    else{
        flag=0;
        Egend.innerHTML = "Field is Required";
    }
    if(flag==1){
        RegisteredMail = mail.value;
        RegisteredPassword = pwd.value;
        console.log("Registered Successfully... \n Registered Email = ", RegisteredMail,RegisteredPassword);
        // window.location.replace("ProjectLoginStu.html");
        return true;
    }
    return false;
}
