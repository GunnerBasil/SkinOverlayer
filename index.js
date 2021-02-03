const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

var overlay = 'overlays/duck.png';
var base = 'steve.png';

const canvas = createCanvas(64, 64);
const ctx = canvas.getContext('2d');

loadImage(base).then((base) => {
	ctx.drawImage(base, 0, 0);
	loadImage(overlay).then((overlay) => {
		ctx.drawImage(overlay, 0, 0)
		
		const buffer = canvas.toBuffer('image/png')
		fs.writeFileSync('output.png', buffer);
	});
});