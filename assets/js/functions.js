"use strict";

$(function(){

	//jQuery globalize helper
	if (!window.Globalize) window.Globalize = {
	    format: function(number, format) {
	            number = String(this.parseFloat(number, 10) * 1);
	            var m = String(format).match(/^[nd](\d+)$/)
	            format = ( m ) ? m[1] : 2;
	            for (var i = 0; i < format - number.length; i++)
	                    number = '0'+number;
	            return number;
	    },
	    parseFloat: function(number, radix) {
	            return parseFloat(number, radix || 10);
	    }
	};


	//Top slider

	$(".rslides.header-slider").responsiveSlides({
		prevText: '<img src="assets/images/left-arrow.png" alt="Previous" width="66" height="36">',
		nextText: '<img src="assets/images/right-arrow.png" alt="Next" width="66" height="36">',
		nav: true
	});

	$(".home-featured .rslides").responsiveSlides({
		prevText: '<i class="zmdi zmdi-chevron-left make-center"></i>',
		nextText: '<i class="zmdi zmdi-chevron-right make-center"></i>',
		nav: true
	});

	$('.slick-related').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevText: '<img src="assets/images/arrow-left-direction.png" alt="Previous" width="9" height="14">',
		nextText: '<img src="assets/images/right-black-arrow.png" alt="Next" width="9" height="14">'
	});

	$('.slick-featured').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		prevText: '<i class="zmdi zmdi-chevron-left"></i>',
		nextText: '<i class="zmdi zmdi-chevron-right"></i>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
   		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
	});

	$('.slick-blog').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		prevText: '<i class="zmdi zmdi-chevron-left"></i>',
		nextText: '<i class="zmdi zmdi-chevron-right"></i>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
   		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}
	]

	});

	$("#to-top").on("click", function(){
		$('html,body').animate({ scrollTop: 0 }, 'ease');
		return false;
	});

	$("#menu-toggle").on("click", function(e){
		$("#hover-menu").fadeToggle();
		e.preventDefault();
	});

	var $hovercart = $("#hover-cart");
	var $hoversearch = $("#hover-search");
	var $newsletter = $("#newsletter-popup");

	$("#cart-toggle").on("click", function(e){
		$hovercart.fadeIn();
		e.preventDefault();
	});
	$("#cart-close").on("click", function(e){
		$hovercart.fadeOut();
		e.preventDefault();
	});
	$("#search-toggle").on("click", function(e){
		$hoversearch.slideDown(1000,"swing");
		e.preventDefault();
	});
	$("#hover-search").on("click", function(e){
		$hoversearch.slideUp(1000,"swing");
		e.preventDefault();
	});
	$("#hover-search input").on("click", function(e){
		e.stopPropagation();
	});

	$("#newsletter-close").on("click", function(e){
		$newsletter.fadeOut();
		e.preventDefault();
	});	

	$newsletter.on("click", function(e){
		$newsletter.fadeOut();
		e.preventDefault();
	});	

	setTimeout(function(){
		$newsletter.fadeIn();
	},3000); 

	$(".newsletter-container").on("click", function(e){
		e.stopPropagation();
	});

	$("#mainnav-toggle").on("click", function(e){
		e.preventDefault();
		$(this).siblings("nav").slideToggle();
	});

	var $slider = $("#slider-range");
	var $minprice = $(".price.facet .min-price");
	var $maxprice = $(".price.facet .max-price");

	$slider.slider({
      range: true,
      min: 70,
      max: 300,
      values: [ 75, 300 ],
      step: 1,
      slide: function( event, ui ) {
      		var valuemin = ui.values[0];
            var valuemax = ui.values[1];
            $(this).next().val(valuemax);
            $(this).prev().val(valuemin);

		$minprice.val("£" + $slider.slider("values",0));
    	$maxprice.val("£" + $slider.slider("values",1));
      }
    });

    $minprice.val("£" + $slider.slider("values",0));
    $maxprice.val("£" + $slider.slider("values",1));

	$(".quantity > a.minus").on("click", function(e){
		var elem = $(this).parent().find("span");
		var value = parseInt(elem.html() , 10);
		if(value>1){
			value--;
			elem.html(value); 
			}
		e.preventDefault();
	});


	$(".quantity > a.plus").on("click", function(e){
		var elem = $(this).parent().find("span");
		var value = parseInt(elem.html() , 10);
		value++;
		elem.html(value); 
		e.preventDefault();
	});

	$("#prod-detail-1 #tabs").tabs();

	$("#prod-detail-2 #tabs").tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $("#prod-detail-2 #tabs li").removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

	$(".panel .goleft").on("click", function(e){
		var $elem = $(this);
		e.preventDefault();
		var active = $elem.siblings(".selected-box");
		if( $(active).data("option") > 1 ){
			$(active).removeClass("selected-box").prev().addClass("selected-box");
		}
	});

	$(".panel .goright").on("click", function(e){
		e.preventDefault();
		var $elem = $(this);
		var $active = $elem.siblings(".selected-box");
		if( $active.data("option") < 5 ){
			$active.removeClass("selected-box").next().addClass("selected-box");
		}
	});

	$(".panel .opt").on("click", function(e){
		e.preventDefault();
		$(this).addClass("selected-box").siblings(".selected-box").removeClass("selected-box");
	});

	$(".spinner").spinner({
		classes: {
			"ui-spinner": "pull-right",
			"ui-spinner-input": "text-center"
		},
		numberFormat: "d2",
		min: 1,
		max: 99,
		step: 1,
		stop: function(event,ui){
			var $elem = $(this);
			var q = $elem.spinner("value");
			var p = $elem.parent().siblings(".price").html();
			$elem.parent().parent().next().find(".totalprice").html( parseFloat(p * q, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() );
		}
	}).focus(function(){
		$(this).blur();
	});

	$( "input[type='checkbox']" ).checkboxradio();

});