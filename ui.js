'use strict';

////////////////////////////////////////////////////////////
// Misc. useful functions.

// Same behavior as Python's randrange().
function randrange(begin, end) {
	if (end === undefined) {
		end = begin;
		begin = 0;
	}
	return Math.floor(Math.random() * (end - begin) + begin);
}

function clear_context(ctx) {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function clear_canvas(canvas) {
	var ctx = canvas.getContext('2d');
	clear_context(ctx);
}

////////////////////////////////////////////////////////////
// UI interaction.

function redraw_canvases() {
	var w = g_sprite.width;
	var h = g_sprite.height;

	var rawcanvas = document.getElementById('raw');
	var ctx = rawcanvas.getContext('2d');
	rawcanvas.width = w;
	rawcanvas.height = h;
	ctx.imageSmoothingEnabled = false;
	clear_context(ctx);
	g_imagedata = createImageDataFromSprite(g_sprite, ctx);
	ctx.putImageData(g_imagedata, 0, 0);

	var zoomedcanvas = document.getElementById('zoomed');
	var zctx = zoomedcanvas.getContext('2d');
	zoomedcanvas.width = w * 4;
	zoomedcanvas.height = h * 4;
	zctx.imageSmoothingEnabled = false;
	clear_context(zctx);
	zctx.drawImage(rawcanvas,
		0, 0,
		w, h,
		0, 0,
		w * 4, h * 4);
}

function regenerate(ev) {
	var shapeinput = document.getElementById('shape');
	var colorinput = document.getElementById('color');

	var shapenum = parseInt(shapeinput.value, 10);
	var colornum = parseInt(colorinput.value, 10);

	g_pixelartgen = shapes[shapenum];
	g_colortable = coltables[colornum];
	g_sprite = g_pixelartgen.createSprite(g_colortable);

	redraw_canvases();
}

function init() {
	var paramsform = document.getElementById('paramsform');
	paramsform.addEventListener('input', regenerate);

	var regenbutton = document.getElementById('regenbutton');
	regenbutton.addEventListener('click', regenerate);

	var shapeinput = document.getElementById('shape');
	shapeinput.max = shapes.length - 1;
	shapeinput.value = randrange(shapes.length);

	var colorinput = document.getElementById('color');
	colorinput.max = coltables.length - 1;
	colorinput.value = randrange(coltables.length);

	regenerate();
}

////////////////////////////////////////////////////////////
// Global vars.

var g_pixelartgen = null;
var g_colortable = null;
var g_sprite = null;
var g_imagedata = null;

// This script should be included with "defer" attribute.
init();
