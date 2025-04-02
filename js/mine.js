function isMobile() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) return true;
    return false;
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}


$(function () {
    function checkScroll() {
        if ($(window).scrollTop() > 0) {
            $(".top_header").addClass("on2");
        } else {
            $(".top_header").removeClass("on2");
        }
    }
    $(window).on('scroll', checkScroll);
    checkScroll(); // 初始化检查
});



// 新闻部分
$(document).ready(function () {
    function initSlider() {
        var screenWidth = $(window).width();
        var vis = (screenWidth <= 768) ? 1 : 3;
        var liWidth = screenWidth / vis;
        $(".index_part03 .newsSlide .bds ul li").css("width", liWidth);
        $(".index_part03 .newsSlide .nChanges1").slide({
            titCell: ".hd ul",
            mainCell: ".bds ul",
            autoPage: true,
            effect: "leftLoop",
            autoPlay: false,
            vis: vis,
            prevCell: ".prevss",
            nextCell: ".nextss"
        });
        $(".index_part03 .newsSlide .nChanges2").slide({
            titCell: ".hd ul",
            mainCell: ".bds ul",
            autoPage: true,
            effect: "leftLoop",
            autoPlay: false,
            vis: vis,
            prevCell: ".prevss",
            nextCell: ".nextss"
        });
    }
    function initTabChange(tab_li, changeBox) {
        var index = 0;
        $(tab_li).eq(0).addClass('on');
        $(changeBox).eq(0).addClass('active');
        $(tab_li).click(function () {
            index = $(this).index();
            $(this).addClass("on").siblings().removeClass("on");
            $(changeBox).eq(index).stop(true, true).addClass('active').siblings().removeClass('active');
        });
    }

    initSlider();
    initTabChange(".newsTab ul li", ".newsMain .newsSlide");

    $(window).resize(function () {
        initSlider();
    });
});