// JavaScript Document
$(function () {
	var winH = $(window).height();
	var winW = $(window).width();

	//移动端导航
	$("#nav_but").click(function () {
		$(".wap_nav").removeClass('wap_on2')
		if ($('.wap_nav').hasClass('wap_on')) {
			$(".wap_nav").removeClass('wap_on')
			$("body").removeClass('wap_body')
		} else {
			$(".wap_nav").addClass('wap_on')
			$("body").addClass('wap_body')
		}
		return false
	})
	// 二级弹出
	$(".wap_nav .nav1 .two a").click(function () {
		var ind = $(".wap_nav .nav1 .two").index($(this).parent(".two"));
		$(".wap_nav .nav2 .box").css("display", "none")
		$(".wap_nav .nav2 .box").eq(ind).css("display", "block")
		$('.wap_nav').addClass('wap_on2')
		return false
	})
	// 返回一级
	$(".wap_nav .but_fh").click(function () {
		$('.wap_nav').removeClass('wap_on2')
	})
	// 三级展开
	$(".wap_nav .nav2 dd").each(function () {
		var leng = $(this).find("li").length;
		if (leng > 0) {
			$(this).find("span a").append("<b></b>");
		}
	});
	$(".wap_nav .nav2 dd > span a").click(function () {
		var aLi = $(this).parent("span");
		console.log(aLi.next("ol"))
		if (aLi.next("ol").length > 0) {
			if (aLi.next("ol").is(":hidden")) {
				aLi.next("ol").slideDown()
				aLi.parents("dd").addClass("one")
			} else {
				aLi.next("ol").slideUp()
				aLi.parents("dd").removeClass("one")
			};
			return false
		}
	});
	// 语言切换
	$(".wap_nav .head_lang").click(function () {
		$(".phone_lang_bg").toggleClass("on");
		$(".phone_langlist").slideToggle();
		return false
	});

	// PC导航
	// 企业业务导航选项卡切换
	$("#home_enterprise_tab").idTabs();
	// 个人业务导航选项卡却换
	$("#home_personal_tab").idTabs();
	//导航展开
	$(".top_header .nav li a").hover(function () {
		$(".top_header .nav li a").removeClass("one")
		$(".top_header").removeClass("header_nav")
		$(".header_nav_bg").removeClass("header_nav_bg_on")
	});
	$(".top_header .nav .two").hover(function () {
		var ind = $(".top_header .nav .two").index($(this));
		if (ind === 2 || ind === 3) {
			$(".top_header .mine_bg").addClass("mine_search_bg");
		} else {
			$(".top_header .mine_bg").removeClass("mine_search_bg");
		}
		$(".top_header .nav .two").removeClass("one");
		$(this).addClass("one");
		$(".top_header .mine_bg .mine").stop(true, true).fadeOut(300)
		$(".top_header .mine_bg .mine").eq(ind).stop(true, false).fadeIn(300)

		$(".top_header").addClass("header_nav");
		$(".header_nav_bg").addClass("header_nav_bg_on")
		return false;
	});

	$(".top_header").hover(function () {

	}, function () {
		$(".top_header .nav li a").removeClass("one")
		$(".top_header").removeClass("header_nav")
		$(".header_nav_bg").removeClass("header_nav_bg_on")
	});

	$(document).on("click", ".top_header .mine_bg .btn_top", function () {
		$(".top_header .nav li a").removeClass("one")
		$(".top_header").removeClass("header_nav")
		$(".header_nav_bg").removeClass("header_nav_bg_on")
		return false;
	});

	$(".head_lang").hover(
		function () {
			// 鼠标移入时滑动显示 mine_lang 列表，并添加 .on 类
			$(this).find(".mine_lang").stop().slideDown(300); // 300ms 的滑动展开动画
			$(this).addClass("on");
		},
		function () {
			// 鼠标移出时滑动隐藏 mine_lang 列表，并移除 .on 类
			$(this).find(".mine_lang").stop().slideUp(300); // 300ms 的滑动收起动画
			$(this).removeClass("on");
		}
	);

	$(".top_header").addClass("on")

    // 点击导航内的 a 标签关闭导航
    $(".submenu").click(function () {
        $(".wap_nav").removeClass('wap_on wap_on2');
        $("body").removeClass('wap_body');
        $(".top_header .nav li a").removeClass("one");
        $(".top_header").removeClass("header_nav");
        $(".header_nav_bg").removeClass("header_nav_bg_on");
    });
})





