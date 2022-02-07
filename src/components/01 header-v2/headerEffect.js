import $ from 'jquery';

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.header').addClass('headerEffect')
    }
    else
    {
        $('.header').removeClass('headerEffect')
    }
})