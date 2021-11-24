import bootstrap from 'bootstrap';

import $ from "jquery";
window.$ = window.jQuery = $;
import Slick from "slick-carousel";


import './style.scss';

$(document).ready(function () {
	$('.testimonial').slick({
		rtl: true
	});
})