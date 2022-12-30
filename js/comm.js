$(document).ready(function(){
    $(".link-bnr").click(function(){
        $('#modal').css('display', "flex");
    })
})

$(document).ready(function(){
    $(".btn-close").click(function(){
        $('#modal').css('display', "none");
    })
    let now = 1,
    height = 100,
    $slide = $('.slide > ul')

    setInterval(function(){
    slide()
}, 3000)

function slide() {
    if(now < 3){
        $slide.animate({
            top : (height * now * (-1)) + '%'
        })
        now = now + 1 ;
    } else{
        $slide.animate({
            top : 0
        })
        now = 1;
    }
}$('.tab .sec-tit').click(function(){
    $('.tab section').removeClass('on')
    $(this).parent().addClass('on')
})
})



