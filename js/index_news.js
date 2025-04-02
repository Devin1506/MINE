tabChange(".newsTab ul li", ".newsMain .newsSlide");
function tabChange(tab_li, changeBox) {
	var index = 0;
	$(tab_li).eq(0).addClass('on');
	$(changeBox).eq(0).addClass('active');
	$(tab_li).click(function() {
		index = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(changeBox).eq(index).stop(true, true).addClass('active').siblings().removeClass('active');
	});
}
$(".NLsrcr50 .newsSlide .nChanges1").slide({
	titCell: ".hd ul",
	mainCell: ".bds ul",
	autoPage: true,
	effect: "leftLoop",
	autoPlay: false,
	vis: 4,
	prevCell: ".prevss",
    nextCell: ".nextss"
});
$(".NLsrcr50 .newsSlide .nChanges2").slide({
	titCell: ".hd ul",
	mainCell: ".bds ul",
	autoPage: true,
	effect: "leftLoop",
	autoPlay: false,
	vis: 4,
	prevCell: ".prevss",
	nextCell: ".nextss"
});
$(".NLsrcr50 .newsMain .newsSlide").each(function(i) {
	var nav_numb = $(this).attr('data-numb');
	var nav_num = $(".NLsrcr50 .newsTab ul li").eq(i).attr('data-num');
	if (nav_numb != nav_num) {
		$(this).remove();
	}
	if (nav_numb == 0) {
		$(this).show();
	}
})