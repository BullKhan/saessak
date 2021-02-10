$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간[단위:ms]
    dots: true, // 번호 버튼 나타낼 여부
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 769,    // 제한크기에서 +1px하면 된다.
        settings: {
            arrows: false,
        }
}]
})

$('.article1 .plpa').on('click', function(){
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

$(window).on('scroll', function(){
    var sct = $(this).scrollTop();
    if ( sct>=1 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
        // $('#header .open').css("top","30px")
    } else if ( sct<1 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
        // $('#header .open').css("top","60px")
    }
})

$('#header .open').on('click', function(){
    $(this).removeClass('on');
    $(this).next().next().addClass('on');
    $(this).next().addClass('on');
})
$('#header .close').on('click', function(){
    $(this).removeClass('on');
    $(this).prev().prev().addClass('on');
    $(this).prev().removeClass('on');
    $(this).prev().find('.depth1 > li').removeClass('on')
})

// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따라 상태(화면너비)제어 프로그램
var deviceSize1 = 1024;
var deviceSize2 = 768;

function scrollOX(status) {
    $('html').css({ overflowY:status })
    var htmlWidth = $('html').width();
    return htmlWidth;
}
var swh = scrollOX('hidden');
var sws = scrollOX('scroll');
var swd = swh - sws;
if ( swd > 0 ) {
    deviceSize1 -= swd;
    deviceSize2 -= swd;
}

var ww;
function calc_width(){
    ww = $(window).width();
    if ( ww > deviceSize1 && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('tablet');
        $('html').scrollTop(0);
    } else if ( ww<=deviceSize1 && ww>deviceSize2 && !$('html').hasClass('tablet') ){
        $('html').addClass('tablet').removeClass('pc mobile');
        $('html').scrollTop(0);
        $('#header .depth1 > li').removeClass('on')
    } else if ( ww<=deviceSize2 && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('tablet');
        $('html').scrollTop(0);
        $('#header .open').addClass('on');
        $('#header .close').removeClass('on');
        $('#header #nav').removeClass('on');        
    }
}

calc_width();
$(window).on('resize', function(){ calc_width(); })
// 여기서까지 resize 이벤트 발생시 스크롤바 유무에 따라 상태(화면너비)제어 프로그램

$('#nav .depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc') || $('html').hasClass('tablet') ) {
            $(this).addClass('on')
        }   
    },
    function(){
        if ( $('html').hasClass('pc') || $('html').hasClass('tablet') ) {
            $(this).removeClass('on')
        }
    }
)
$('#nav .depth1 > li').on('click', function(e){
    if ( $('html').hasClass('mobile') ) {
        e.preventDefault();
        $(this).toggleClass('on').siblings().removeClass('on');
    }
})



$('#nav .depth2 > li').on('click', function(e){
    e.stopPropagation();
})