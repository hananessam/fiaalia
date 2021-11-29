import bootstrap from 'bootstrap';

import $ from "jquery";
window.$ = window.jQuery = $;

import hotspots from "../hotspots.json";


$(document).ready(function () {
	console.log(hotspots)
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var cw = canvas.width;
	var ch = canvas.height;
	function reOffset() {
	  BB = canvas.getBoundingClientRect();
	  offsetX = BB.left;
	  offsetY = BB.top;
	}
	var offsetX, offsetY, BB;
	reOffset();
	window.onscroll = function (e) {
	  reOffset();
	};
	window.onresize = function (e) {
	  reOffset();
	};

	draw();

	// $("#canvas").mousemove(function (e) {
	//   handleMouseMove(e);
	// });

	function draw() {
	  for (var i = 0; i < Object.keys(hotspots).length; i++) {
	    var h = hotspots[i];
	    ctx.beginPath();
	    ctx.strokeStyle = "#FFFFFF";
	    ctx.rect(h.x, h.y, h.width, h.height);
	    ctx.fillStyle = h.color;
			ctx.fill();
	    ctx.closePath();
	    ctx.stroke();

	    if (h.is_booked) {
	    	ctx.fillStyle = "#000000";
	    	ctx.fillText("Booked", (h.x)+(h.width/2), (h.y)+(h.height/2));
	    }
	  }
	}

	$("#canvas").click(function (e) {

		e.preventDefault();
	  e.stopPropagation();

	  var mouseX = parseInt(e.clientX - offsetX);
	  var mouseY = parseInt(e.clientY - offsetY);

	  ctx.clearRect(0, 0, cw, ch);
	  draw();
	  ctx.fillStyle = "#000000";

		for (var i = 0; i < Object.keys(hotspots).length; i++) {
	    var h = hotspots[Object.keys(hotspots)[i]];
	    var dx = mouseX + h.x;
	    var dy = mouseY + h.y;


	    const canvasRelativeX = mouseX * canvas.width / BB.width;
	  	const canvasRelativeY = mouseY * canvas.height / BB.height;

	    // var centerX = h.x + h.w/2;
	    // var centerY = h.y + h.h/2;

	    let percentX = mouseX/window.innerWidth;
	    let percentY = mouseY/window.innerHeight;

	    if (canvasRelativeX > h.x && canvasRelativeX < h.x + h.width && canvasRelativeY > h.y && canvasRelativeY < h.y + h.height) {
	      let left = (h.x/canvas.width)*100;
	      let top = (h.y/canvas.height)*100;

	      console.log(h.x/canvas.width*100*window.width)
	      $('.tip').text(h.tip).css({
	      	left: left+'%',
	      	top: top+'%',
	      })
	    }
	  }

	});

	// function handleMouseMove(e) {
	//   // tell the browser we're handling this event
	//   e.preventDefault();
	//   e.stopPropagation();

	//   var mouseX = parseInt(e.clientX - offsetX);
	//   var mouseY = parseInt(e.clientY - offsetY);

	//   ctx.clearRect(0, 0, cw, ch);
	//   draw();
	//   ctx.fillStyle = "#000000";
	  
	//   for (var i = 0; i < Object.keys(hotspots).length; i++) {
	//     var h = hotspots[Object.keys(hotspots)[i]];
	//     var dx = mouseX + h.x;
	//     var dy = mouseY + h.y;

	//     if (mouseX > h.x && mouseX < h.x + h.width && mouseY > h.y && mouseY < h.y + h.height) {
	//       ctx.fillText(h.tip, (h.x)+(h.width), (h.y)-(7));
	//     }
	//   }
	// }

});