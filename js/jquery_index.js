// JavaScript Document
$(function () {

	var type = true
	var winH = $(window).height();
	var winW = $(window).width();
	var widScrollT = 0

	var initalizeFun = function () {

		function video_fun() {
			var winwidth = $(window).width()
			var winheight = $(window).height()
			var vbl = 1920 / 1080
			var wbl = winwidth / winheight

			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;//android终端
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);//ios终端
			//判断ios设备，隐藏视频
			if ($(window).width() <= 1200) {
				$(".home_banner .video_bg video").remove()
				$(".home_banner .video_bg2").css("display", "block")
				return false;
			}


			if (vbl < wbl) {
				$("#myVideo").css({
					"width": winwidth,
					"height": winwidth / vbl,
					"left": "0",
					"top": -(winwidth / vbl - winheight) / 2
				})
			} else {
				$("#myVideo").css({
					"width": winheight * vbl,
					"height": winheight,
					"left": -(winheight * vbl - winwidth) / 2,
					"top": "0"
				})
			}
		}
		$(window).resize(function () {
			video_fun();
			winH = $(window).height();
			winW = $(window).width();
			widScrollT = $(window).scrollTop();
			$(".home_banner,.home_banner_bg").css({
				"height": $(window).height()
			})
		})
		video_fun();

		//右侧小点
		$(".right_nav a").on("click", function () {
			var ind = $(this).index();
			if (ind == 0) {
				$("body,html").animate({ scrollTop: 0 }, 500);
			} else {
				$("body,html").animate({ scrollTop: $(".home_index").eq(ind).offset().top - 100 }, 500);
			}

			return false;
		});

		$(window).scroll(function () {
			//首页
			let path = window.location.pathname;
			// let isIndex = sessionStorage.getItem("isIndex") == "1";
			if (
				(path.indexOf("/index") > -1 &&
					path.indexOf("/about/index") == -1 &&
					path.indexOf("/investorRelations/index") == -1 &&
					path.indexOf("/join/index") == -1 &&
					path.indexOf("/news/index") == -1 &&
					path.indexOf("/privacyPolicy/index") == -1) ||
				path == "/" ||
				path.indexOf("/testIndex") > -1 ||
				path.indexOf("/template") > -1 ||
				path.indexOf("/SouthKorea") > -1 ||
				path.indexOf("/Japan") > -1 ||
				path.indexOf("/Singapore") > -1 ||
				path.indexOf("/USA") > -1 ||
				path.indexOf("/European") > -1 ||
				path.indexOf("/India") > -1 ||
				path.indexOf("/Brazil") > -1 ||
				path.indexOf("/Russia") > -1 ||
				path.indexOf("/MiddleEast") > -1 ||
				path.indexOf("/British") > -1 ||
				path.indexOf("/Indonesia") > -1 ||
				path.indexOf("/SouthAfrica") > -1
				// isIndex
			) {
				widScrollT = $(window).scrollTop();

				//第一屏，圆圈logo入场
				if (widScrollT >= 0) {
					var box1_t = sMoveFun(14, 1, 0, winH * 0.6);
					var box1_ta = sMoveFun(1, 0, winH * 0.4, winH * 0.6);
					var box1_ta2 = sMoveFun(1, 0, winH * 0.5, winH * 0.6);
					$(".home_banner2 .logo_bg").css("transform", "scale(" + box1_t + ")")
					$(".home_banner2 .logo_bga").css("opacity", box1_ta)
					$(".home_banner").css("opacity", box1_ta2)



				}


				if (widScrollT >= winH * 0.6) {
					$(".home_banner2 .logo").addClass("on")
					$(".home_banner2 .logo_bg").addClass("on")
				} else {
					$(".home_banner2 .logo").removeClass("on")
					$(".home_banner2 .logo_bg").removeClass("on")
				}


				if (widScrollT >= winH * 0.6) {
					$(".home_banner2 .logo").addClass("on2")
					var timeNum6 = 0
					$(".home_banner2 .logo span").each(function (index, element) {
						timeNum6 = (index + 1) * 0.03 + 1;
						$(this).css({ "transition": "transform 1.05s " + timeNum6 + "s cubic-bezier(.08, .92, .35, 1), opacity 1s " + (timeNum6 + 0.01) + "s" })
					});
				} else {
					$(".home_banner2 .logo").removeClass("on2");
					$(".home_banner2 .logo span").each(function (index, element) {
						$(this).css({ "transition":"transform 0s 0s cubic-bezier(.08, .92, .35, 1), opacity 0s 0s" })
					});
				}



				if (widScrollT >= 300) {
					$(".home_banner .shu").addClass("on")
				} else {
					$(".home_banner .shu").removeClass("on")
				}

				if (widScrollT >= winH) {
					$(".header").addClass("on2")
					$(".mob_part").addClass("mob_part_lm")
					$(".right_nav").addClass("on")
				} else {
					$(".header").removeClass("on2")
					$(".mob_part").removeClass("mob_part_lm")
					$(".right_nav").removeClass("on")
				}


				var home_part1_h = $(".home_part1").outerHeight();
				if (winW <= 758) {
					home_part1_h = $(".home_part1").outerHeight() * 1.1;
				}
				if (widScrollT >= home_part1_h) {
					$(".home_banner2,.home_banner").css({ "top": -(widScrollT - home_part1_h) })
				} else {
					$(".home_banner2,.home_banner").css({ "top": 0 })
				}

				// if(widScrollT >= 1000){
				// 	var boxhome_o = sMoveFun(0,1, 1000, 1000+winH/2);
				// 	$(".home_part1 .home_banner2b").css("opacity",boxhome_o)
				// }
				var home_part1_h2 = $(".home_part1").outerHeight() - 300;
				if (widScrollT >= home_part1_h2) {
					$(".home_banner2").addClass("one1")
					var boxhome_t = sMoveFun(1, 0.5, home_part1_h2, home_part1_h2 + winH);
					$(".home_banner2a").css("transform", "scale(" + boxhome_t + ")")
					//var boxhome_t2 = sMoveFun(1,0.6, 2000, 2000+winH);
					//$(".home_banner2 .logo3").css("transform","scale("+boxhome_t2+")")
				} else if (widScrollT < home_part1_h2 && widScrollT >= winH * 1) {
					$(".home_banner2").removeClass("one1")
					$(".home_banner2a").css("transform", "scale(1)")
					//$(".home_banner2 .logo_bg,.home_banner2 .logo1_bg").css("transform","scale(1)")
				}

				//第3屏跟随
				var boxpart3_s = $(".home_part3").offset().top - winH * 0.7

				if (widScrollT >= boxpart3_s) {
					var boxpart3_t = sMoveFun(0, 160, boxpart3_s, boxpart3_s + winH);
					var boxpart3_t2 = sMoveFun(0, -winW * 0.2, boxpart3_s, boxpart3_s + winH * 1.5);
					var boxpart3_t3 = sMoveFun(0, 100, boxpart3_s, boxpart3_s + winH * 1.5);
					//$(".home_part3 .con_left div").css("transform","translateY("+boxpart3_t+"px)");
					//$(".home_part3 .con_right .con_right_bg").css("transform","translateY(-"+boxpart3_t+"px)");
					var boxpart3_ta = sMoveFun(0, winW * 0.15, boxpart3_s, boxpart3_s + winH);
					$(".home_part3 .con_right .con_right_bg").css("transform", "translateY(" + boxpart3_ta + "px)");
					$(".home_part3 .con_right .con_right_bg").css("background-position", "left " + boxpart3_t3 + "%");
					$(".home_part3 .con_right .con_right_heng").css("transform", "translateX(" + boxpart3_t2 + "px)");
				} else {
					$(".home_part3 .con_left div").css("transform", "translateY(0)");
					$(".home_part3 .con_right .con_right_bg").css("transform", "translateY(0)");
					$(".home_part3 .con_right .con_right_heng").css("transform", "translateY(0)");
				}


				$(".scrollbox").each(function () {
					var win = $(window);
					var winTop = 0;
					var winhei = winH * 0.8
					winTop = win.scrollTop()
					thisTop = $(this).offset().top
					if (winTop >= thisTop - winhei) {
						$(this).addClass("on");
					}
				});

				$(".home_index").each(function () {
					var win = $(window);
					var winTop = win.scrollTop();
					var winhei = winH * 0.7
					var thisTop = $(this).offset().top
					var thisH = $(this).outerHeight()
					var ind = $(".home_index").index($(this))

					if (winTop >= thisTop - winhei && winTop <= thisTop + thisH - winhei) {
						$(".right_nav a").removeClass("one")
						$(".right_nav a").eq(ind).addClass("one")
					};
				});
			}

		});


		$(".header,.home_banner").addClass("on")



		// BANNER形象图

		var mySwiper_phone = new Swiper('.video_bg2 .swiper-container', {
			loop: true,
			effect: 'fade',
			speed: 1000,
			fade: {
				crossFade: true,
			},
			autoplay: 2000,
			autoplayDisableOnInteraction: false,
			slidesPerView: 1

		})

		var mySwiper = new Swiper('.home_banner .swiper_bg .swiper-container', {
			loop: true,
			effect: 'fade',
			speed: 1000,
			fade: {
				crossFade: true,
			},
			autoplay: 6000,
			autoplayDisableOnInteraction: false,
			slidesPerView: 1,
			onSlideChangeStart: function (swiper) {
				$(".home_banner .swiper_bg .swiper-slide-prev ").addClass("swiper-slide-chu")
			},
			onSlideChangeEnd: function () {
				$(".home_banner .swiper_bg .swiper-slide").removeClass("swiper-slide-chu")
			}

		})

		$('.home_banner .swiper_bg .index_newsleft').on('click', function (e) {
			e.preventDefault()
			mySwiper.slidePrev()
			home_banner_next();
		})
		$('.home_banner .swiper_bg .index_newsright').on('click', function (e) {
			e.preventDefault()
			mySwiper.slideNext()
			home_banner_next();
		})

		$(".home_banner,.home_banner_bg").css({
			"height": $(window).height()
		})

		var home_banner_time;
		var home_banner_next = function () {
			clearTimeout(home_banner_time)
			$(".home_banner .circleProgress_wrapper").clearQueue()
			$(".home_banner .circleProgress_wrapper").stop(true, true).fadeIn(0);
			//$('.home_part5 .index_newsright').find(".circleProgress_wrapper").fadeIn();
			$(".circle.circle_right").html("")
			$(".circle.circle_left").html("")
			$(".circle.circle_right").html('<div class="circleProgress rightcircle" ></div>')
			$(".circle.circle_left").html('<div class="circleProgress leftcircle" ></div>')
			//$(".home_banner .circleProgress_wrapper").stop(true,true).delay(7000).fadeOut(300);

			home_banner_time = setTimeout(function () {
				home_banner_next();
			}, 7000)
		}
		home_banner_next();

		//新闻轮播
		if ($("#homenews1 .swiper-slide").length > 10) {
			$("#homenews1 .home_newspagebox .span2").text($("#homenews1 .swiper-slide").length);
		} else {
			$("#homenews1 .home_newspagebox .span2").text('0' + $("#homenews1 .swiper-slide").length);
		}
		if ($("#homenews2 .swiper-slide").length > 10) {
			$("#homenews2 .home_newspagebox .span2").text($("#homenews2 .swiper-slide").length);
		} else {
			$("#homenews2 .home_newspagebox .span2").text('0' + $("#homenews2 .swiper-slide").length);
		}
		var newsSwiper1 = new Swiper('#homenews1 .swiper-container', {
			loop: true,
			loopAdditionalSlides: 3,
			//autoplay:3000,
			speed: 1000,
			slidesPerView: 3,
			// centeredSlides : true,
			calculateHeight: true,
			autoplayDisableOnInteraction: true,
			// pagination: '#homenews1 .home_newspage',
			// paginationType: 'progress',
			// prevButton: '#homenews1 .home_newsleft',
			// nextButton: '#homenews1 .home_newsright',
			onSlideChangeEnd: function (swiper) {
				var ind = swiper.realIndex + 1
				if (ind > 10) {
					$("#homenews1 .home_newspagebox .span1").text();
				} else {
					$("#homenews1 .home_newspagebox .span1").text('0' + ind);
				}
			}
		});
		var newsSwiper2 = new Swiper('#homenews2 .swiper-container', {
			loop: true,
			loopAdditionalSlides: 3,
			//autoplay:3000,
			speed: 1000,
			slidesPerView: 3,
			// centeredSlides : true,
			calculateHeight: true,
			autoplayDisableOnInteraction: true,
			// pagination: '#homenews2 .home_newspage',
			// paginationType: 'progress',
			// prevButton: '#homenews2 .home_newsleft',
			// nextButton: '#homenews2 .home_newsright',
			onSlideChangeEnd: function (swiper) {
				console.log("a2")
				var ind = swiper.realIndex + 1
				if (ind > 10) {
					$("#homenews2 .home_newspagebox .span1").text();
				} else {
					$("#homenews2 .home_newspagebox .span1").text('0' + ind);
				}
			}
		});

		$("#homenews1 .home_newsleft").on("click", function () {
			newsSwiper1.slidePrev()
			return false;
		});
		$("#homenews1 .home_newsright").on("click", function () {
			newsSwiper1.slideNext()
			return false;
		});

		$("#homenews2 .home_newsleft").on("click", function () {
			newsSwiper2.slidePrev()
			return false;
		});
		$("#homenews2 .home_newsright").on("click", function () {
			newsSwiper2.slideNext()
			return false;
		});


		// 新闻选项卡
		$(".index_tabul").idTabs();

	}



	//预加载load
	var loadimg_typr = true
	function loadimg(arr, funLoading, funOnLoad, funOnError) {
		var numLoaded = 0,
			numError = 0,
			isObject = Object.prototype.toString.call(arr) === "[object Object]" ? true : false;
		var arr = isObject ? arr.get() : arr;
		for (a in arr) {
			var src = isObject ? $(arr[a]).attr("data-src") : arr[a];
			preload(src, arr[a]);
		};
		function preload(src, obj) {
			var img = new Image();
			img.onload = function () {
				numLoaded++;
				funLoading && funLoading(numLoaded, arr.length, src, obj);
				funOnLoad && numLoaded == arr.length && funOnLoad(numError);
				img.onload = null;
			};
			img.onerror = function () {
				numLoaded++;
				numError++;
				funOnError && funOnError(numLoaded, arr.length, src, obj);
			}
			img.src = src;
		};
	};
	var funloading_obj = function (n, total, src, obj) {
		$(obj).attr("src", src).remove("data-src");
		var bfb = Math.round(n / total * 100)
		$(".progress_txt").text(bfb + "%");
		$(".progress_bar").css({ "width": bfb + "%" });
		if (n >= total - 1) {
			funloading_in();
		};
	};
	var funloading_in = function () {
		if (loadimg_typr) {
			loadimg_typr = false
			$(".load").fadeOut(600);
			$("body").removeClass("load_body");
			$("body").addClass("content_body");

			//执行初始化函数；
			initalizeFun();
		}
	}

	//执行初始化
	loadimg($(".load_img img[data-src!='']"), funloading_obj);
	setTimeout(function () {
		funloading_in();
	}, 6000)
	//initalizeFun();
	// funloading_in();





	//运动函数-滚动触发（元素起始位置，元素结束位置，运动起始位置，运动结束位置）
	var sMoveFun = function (oStart, oEnd, sStart, sEnd) {
		var ret;
		if (widScrollT >= sStart && widScrollT <= sEnd) {		//运行过程中
			ret = oStart + (oEnd - oStart) / (sEnd - sStart) * (widScrollT - sStart)
		} else if (widScrollT < sStart) {	//进入之前
			ret = oStart
		} else if (widScrollT > sEnd) {	//离开之后
			ret = oEnd
		}
		return ret;
	}


})





