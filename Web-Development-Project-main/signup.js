const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const pass = document.getElementById("pass");

function namevalidate() {
    let regx = /^[a-zA-Z]([0-9a-zA-Z]{0,10})/;
    let str = name.value;
    if (regx.test(str)) {
        document.getElementById("vname").style.visibility = "hidden";
        return true;
    }else if(pass.value ==""){
        document.getElementById("vname").innerHTML="Name Is Required";
        document.getElementById("vname").style.visibility = "visible";
        return false;
    }else {
        document.getElementById("vname").style.visibility = "visible";
        return false;
    }
    return true;
};

function emailvalidate() {
    let regx = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    let str = email.value;
    if (regx.test(str)) {
        document.getElementById("vemail").style.visibility = "hidden";
        return true;
    }else if(pass.value ==""){
        document.getElementById("vemail").innerHTML="Email Is Required";
        document.getElementById("vemail").style.visibility = "visible";
        return false;
    }else {
        document.getElementById("vemail").style.visibility = "visible";
        return false;
    }
    return true;
};

function pvalidate() {
    var reg = /^[6-9][0-9]{9}$/;
    if (reg.test(phone.value)) {
        document.getElementById("pvalue").style.visibility = "hidden";
        return true;
    }
    else if(pass.value ==""){
        document.getElementById("pvalue").innerHTML="Phone Number Is Required";
        document.getElementById("pvalue").style.visibility = "visible";
        return false;
    }
    else {
        document.getElementById("pvalue").style.visibility = "visible";
        return false;
    }
    return true;
}

function pwdvalidate(){
        var reg=/^([a-zA-Z]+)[a-zA-Z0-9\!\@\#\$\%\^\&\*\.\?;+=-_]{8,20}$/;
        if(reg.test(pass.value)){
            document.getElementById("pwdvalue").style.visibility = "hidden";
            return true;
        }
        else if(pass.value ==""){
            document.getElementById("pwdvalue").innerHTML="Password Is Required";
            document.getElementById("pwdvalue").style.visibility = "visible";
            return false;
        }
        else{
            document.getElementById("pwdvalue").innerHTML="Password Must Be Of 8 Characters";
            document.getElementById("pwdvalue").style.visibility = "visible";
            return false;
        }
        return true;
    }

const cpass= document.getElementById("cpass");


function login() {
    if (email.value==""||pass.value==""||cpass.value==""){
        return false;
}
else if (!emailvalidate()){
    document.getElementById("vemail").innerHTML="Enter A Valid Email";
}
else{
    window.open("home.html");
}
}
    
