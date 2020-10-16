/*
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#content-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-phantom').hide();
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-phantom').show();
    }
}
*/



//작가결제 수량조절
$(function(){
    $('.bt_up').click(function(){
        var n = $('.bt_up').index(this);
        var goods_num = $(".goods_num:eq("+n+")").val();
        goods_num = $(".goods_num:eq("+n+")").val(goods_num*1+1);
    });
    $('.bt_down').click(function(){
        var n = $('.bt_down').index(this);
        var goods_num = $(".goods_num:eq("+n+")").val();
        goods_num = $(".goods_num:eq("+n+")").val(goods_num*1-1);
    });
})


//아코디언-faq
//<![CDATA[
$(function(){
    var article = $('.board_box .article');
    article.addClass('hide_none');
    article.find('.a_txt').slideUp(0);
    $('.board_box .article .trigger').click(function(){
        var myArticle = $(this).parents('.article:first');
        if(myArticle.hasClass('hide_none')){
            article.addClass('hide_none').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            article.find('.a_txt').slideUp(0); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            myArticle.removeClass('hide_none').addClass('show');
            myArticle.find('.review_btn img').attr('src', './images/board_box_on.png');
            myArticle.find('.a_txt').slideDown(0);
        } else {
            myArticle.removeClass('show').addClass('hide_none');
            myArticle.find('.review_btn img').attr('src', './images/board_box_off.png');
            myArticle.find('.a_txt').slideUp(0);
        }
    });
    $('.board_box .hgroup .trigger').click(function(){
        var hidden = $('.board_box .article.hide').length;
        if(hidden > 0){
            article.removeClass('hide_none').addClass('show');
            article.find('.a_txt').slideDown(0);
        } else {
            article.removeClass('show').addClass('hide_none');
            article.find('.a_txt').slideUp(0);
        }
    });
});
//]]>


//작가 사진 좌우 슬라이드 리스트
$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

