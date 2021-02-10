var ww = $(window).width()
console.log(ww)

if( ww>=769 ) {
    $('#nav .depth1 > li').on('mouseover',function(){
        $(this).addClass('on')
    })
    $('#nav .depth1 > li').on('mouseout',function(){
        $(this).removeClass('on')
    })
} else {
    $('#nav .depth1 > li').on('click',function(){
        $(this).toggleClass('on')

        // var display = $(this).find('.depth2').css('display');
        // if(display === 'none')){$(this).addClass('on')}

        // if(!$(this).hasClass('on')){ $(this).addClass('on') }
        // else { $(this).removeClass('on') }
        
        $(this).siblings().removeClass('on')
    })
}

$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간[단위:ms]
    dots: true, // 번호 버튼 나타낼 여부
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

var btn = $('.article1 .plpa');
btn.on('click', function(){
    var i = $(this).find('i');
    if(i.hasClass('fa-pause')){
        $('.slide_group').slick('slickPause')
        i.removeClass('fa-pause').addClass('fa-play')
    }
    else {
        $('.slide_group').slick('slickPlay')
        i.removeClass('fa-play').addClass('fa-pause')
    }
})

$('#header .open').on('click',function(){
    $(this).next().css({
        display:'block'
    })
    $(this).css({
        display:'none'
    })
    $(this).next().next().css({
        display:'block'
    })
})
$('#header .close').on('click',function(){
    $(this).prev().css({
        display:'none'
    })
    $(this).css({
        display:'none'
    })
    $(this).prev().prev().css({
        display:'block'
    })
})

// $('#nav .depth1 > li').hover(
//     function(){ $(this).addClass('on') },
//     function(){ $(this).removeClass('on') }
// )


$(window).on('scroll', function(){
    var sct = $(this).scrollTop();
    if ( sct>=10 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
        // $('#section').css("margin-top","76px")
    } else if ( sct<10 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
        // $('#section').css("margin-top","0px")
    }
})


