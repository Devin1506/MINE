// footer.js
console.log("Footer script loaded!");
$(function () {
    // 返回顶部按钮逻辑
    $('.m_pop').hide();
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $('.m_pop').toggle(scrollTop > 1000);
    });
    $('.m_pop a').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

});
