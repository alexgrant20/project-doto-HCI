$(document).keydown(function(e){

    const Q = $('.q');
    const W = $('.w');
    const E = $('.e');
    const R = $('.r');
    
    const QContent = $('.content-q');
    const WContent = $('.content-w');
    const EContent = $('.content-e');
    const RContent = $('.content-r');

    $('.content-placeholder').removeClass('d-block');
    QContent.removeClass('d-block');
    WContent.removeClass('d-block');
    EContent.removeClass('d-block');
    RContent.removeClass('d-block');

    Q.removeClass('clicked');
    W.removeClass('clicked');
    E.removeClass('clicked');
    R.removeClass('clicked');

    if(e.key === "q" || e.key === "Q"){
        Q.addClass('clicked');
        QContent.addClass('d-block');
    } else if(e.key === "w" || e.key === "W"){
        W.addClass('clicked');
        WContent.addClass('d-block');
    } else if(e.key === "e" || e.key === "e"){
        E.addClass('clicked');
        EContent.addClass('d-block');
    }else if(e.key === "r" || e.key === "R"){
        R.addClass('clicked');
        RContent.addClass('d-block');
    } else{
        $('.content-placeholder').addClass('d-block');
    }
});

