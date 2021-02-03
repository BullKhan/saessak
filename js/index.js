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