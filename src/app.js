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



	const goToNextInput = (e) => {
    var key = e.which;
    var t = $(e.target);
    var next = t.next('input');
    var prev = t.prev('input');

    if (event.keyCode == 8 || event.keyCode == 46) {
    	prev.select().focus();
    }else{
    	next.select().focus();
    }
  }
  
  const onFocus = (e) => {
    $(e.target).select();
  }

  $('body').on('keyup', 'input', goToNextInput);
  $('body').on('click', 'input', onFocus);
})