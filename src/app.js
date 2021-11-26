import bootstrap from 'bootstrap';

import $ from "jquery";
window.$ = window.jQuery = $;
import Slick from "slick-carousel";


import './style.scss';

$(document).ready(function () {
	$('.testimonial').slick({
		rtl: true
	});


	let count = 1;
	let price = 300.00;

	$('.counter .num').html(count);

	$('.counter .inc').click(function () {
		if (count >= 10) return;
		count++;
		$('.counter .num').html(count);
		$('.item-price').html((count*price).toFixed(2))
		$('.total').html((count*price).toFixed(2))
	})

	$('.counter .dec').click(function () {
		if (count <= 1) return;
		count--;
		$('.counter .num').html(count);
		$('.item-price').html((count*price).toFixed(2))
		$('.total').html((count*price).toFixed(2))
	})
})