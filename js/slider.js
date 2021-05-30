$(document).ready(function(){

    $('.hero-type').on('click', '.type', function() {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
  

    $('.next-btn').on('click', function(){
        var currentImage = $('.merch-container.sel-mer');
        var nextImg = currentImage.next();

      
       
        if(nextImg.length != 0){
            currentImage.fadeOut(0).removeClass('sel-mer');
            nextImg.fadeIn(300).addClass('sel-mer');
        }else{
        }
    });

    $('.prev-btn').on('click', function(){
        var currentImage = $('.sel-mer');
        var prevImg = currentImage.prev();

        if(prevImg.length != 0){
            currentImage.fadeOut(0).removeClass('sel-mer');
            prevImg.fadeIn(300).addClass('sel-mer');
        } 
    });
});

