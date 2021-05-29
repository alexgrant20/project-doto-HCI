function changeVideo(url, id){ 
    const video = document.getElementById(id);
    video.src = url;
    video.play();
    
}

function changePicture(url){ 
    const image = document.getElementById('hero-image');
    image.src = url;
}

function show(el){
    const nav =  document.getElementById(el);
    const active = nav.classList.contains('active');
    const unactive = nav.classList.contains('unactive');

    if(!active && !unactive){
        nav.className = " active";
    } else if(active){
        nav.classList.remove("active")
        nav.className = " unactive";
    } else{
        nav.classList.remove("unactive");
        nav.className = " active";
    }
}

function checkStringNumber(str) {
    const strLength = str.length;
    for(let i = 0; i < strLength; i++){
        if(parseInt(str[i])){
            return true;
        }
    }
    return false;
}

var is_username = false;
var is_email = false;
var is_password = false;
var is_region = false;
var is_dob = false;

function usernameValid(el){
    const username = document.getElementById(el);
    const closest = username.nextElementSibling.nextElementSibling;

    if(username.classList.contains('valid')){
        username.classList.remove("valid")
    }

    if(username.classList.contains('invalid')){
        username.classList.remove("invalid")
        closest.classList.remove("d-block")
    }
    
    if(username.value.length > 8){
        username.className += " valid";
        is_username = true;
        buttonControl('submit')
    } else{
        username.className += " invalid";
        closest.className += " d-block";
        is_username = false;
        buttonControl('submit')
    }
 
}

function emailValid(el){
    const email = document.getElementById(el);
    const emailValue = email.value;
    const closest = email.nextElementSibling.nextElementSibling;

    if(email.classList.contains('valid')){
        email.classList.remove("valid");
    }

    if(email.classList.contains('invalid')){
        email.classList.remove("invalid");
        closest.classList.remove("d-block");
    }
    
    if(emailValue.includes('.com') || emailValue.includes('.co.id') && emailValue.includes('@') && emailValue.length > 0){
        email.className += " valid";
        is_email = true;
        buttonControl('submit')
    } else{
        email.className += " invalid";
        closest.className += " d-block";
        is_email = false;
        buttonControl('submit');
    }
}



function passwordValid(el) {
    const password = document.getElementById(el);
    const passwordValue = password.value;
    const closest = password.nextElementSibling.nextElementSibling.nextElementSibling;

    if(password.classList.contains('valid')){
        password.classList.remove("valid");
    }

    if(password.classList.contains('invalid')){
        password.classList.remove("invalid");
        closest.classList.remove("d-block");
    }

    

    if(passwordValue.toUpperCase() !== passwordValue && passwordValue.length > 7 && passwordValue.toLowerCase() !== passwordValue && checkStringNumber(passwordValue)){
        password.className += " valid";
        is_password = true;
        buttonControl('submit');
    } else{
        password.className += " invalid";
        closest.className += " d-block";
        is_password = false;
        buttonControl('submit');
    }
}

function regionValid(el) {
    const region = document.getElementById(el);
    const regionValue = region.value;
    const closest = region.nextElementSibling.nextElementSibling;
    
    if(region.classList.contains('valid')){
        region.classList.remove("valid")
        is_region = false;
        buttonControl('submit');
    }

    if(region.classList.contains('invalid')){
        region.classList.remove("invalid");
        closest.classList.remove("d-block");
    }

    if(regionValue){
        region.className += " valid";
        is_region = true;
        buttonControl('submit');
    } else{
        region.className += " invalid";
        closest.className += " d-block";
        is_region = false;
        buttonControl('submit');
    }
}

function dobValid(el) {
    const dob = document.getElementById(el);
    const dobValue = dob.value;
    let newDob = '';
    const closest = dob.nextElementSibling.nextElementSibling;

    if(dob.classList.contains('valid')){
        dob.classList.remove("valid");
    }

    if(dob.classList.contains('invalid')){
        dob.classList.remove("invalid");
        closest.classList.remove("d-block");
    }

    console.log(dobValue);

    for(let i = 0; i < 5; i++){
        newDob += dobValue[i];
    }

    newDob = parseInt(newDob);

    if(newDob >= 2022 || newDob < 1900 || isNaN(newDob)){
        dob.className += " invalid";
        closest.className += " d-block";
        is_dob = false;
        buttonControl('submit');
    } else{
        dob.className += " valid";
      
        is_dob = true;
        buttonControl('submit');
    }
}

function buttonControl(el) {

    const button = document.getElementById(el);

    if(button.classList.contains('form-true')){
        button.classList.remove("form-true")
    }

    if(is_username && is_email && is_password && is_region && is_dob ){
        button.className += " form-true";
    }
}

function showPassword(input, icon) {
    const togglePassword = document.getElementById(icon);
    const password = document.getElementById(input);

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  
    togglePassword.classList.toggle('fa-eye-slash');
}

function orderPrice(el,price,tag) {
    const totalOrder = parseInt(document.getElementById(el).value);

    const totalPrice = totalOrder * price;

    document.getElementsByClassName(tag)[0].innerHTML =  `$${totalPrice}`;
}   