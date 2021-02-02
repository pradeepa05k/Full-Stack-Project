var RegisteredMail = "admin@123.com";
var RegisteredPassword = "123";

function valid(){
    var flag = 1;
    if(Lmail.value){
        flag=1;
        Eemail.innerHTML = "";
    }
    else{
        flag=0;
        Eemail.innerHTML = "Field is Required";
    }
    if(Lpassword.value){
        flag=1;
        Epwd.innerHTML = "";
    }
    else{
        flag=0;
        Epwd.innerHTML = "Field is Required";
    }
}