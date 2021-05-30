const modalBtn = document.querySelector('#submit');

const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close')

// FOR REDIRECTING TO DIFFRENT PAGE
const modalMerchClose = document.querySelector('.close-merch');

if(modalBtn){
    modalBtn.addEventListener('click', function(){
        modalBg.classList.add('bg-active');
    });
}

if(modalClose){
    modalClose.addEventListener('click', function(){
        modalBg.classList.remove('bg-active');
        location.replace("./index.html");
    });
    
} else if(modalMerchClose){
    modalMerchClose.addEventListener('click', function(){
        modalBg.classList.remove('bg-active');
        location.replace("./merchandise.html");
    });
}


