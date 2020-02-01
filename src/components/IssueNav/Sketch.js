import Ring from './Ring';

import fontURL from './fonts/Mukta-Regular.ttf';

const MIN_RADIUS = 400;

let font = false;
let rings = [];
let centerX = 0;
let centerY = 0;
let data = [];

const Sketch = (sketch) => {
	sketch.setup = () => {
		sketch.loadFont(fontURL, (fontRef) => {
			sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
			font = fontRef;
			sketch.textSize(22);
			sketch.textFont(font);

			centerX = sketch.width * 0.5;
			centerY = sketch.height + 300;
			const maxRadius = sketch.height * 0.7;
			const radiusStep = maxRadius / data.length;

			rings = data.map((val, i) => new Ring(
				sketch,
				centerX,
				centerY,
				MIN_RADIUS + (radiusStep * (data.length - i - 1)),
				val.author.toUpperCase(),
				`/flat${val.path}`,
				sketch.lerpColor(sketch.color(26, 22, 82), sketch.color(217, 216, 231), (data.length - i) / data.length),
			));
		});
	};

	sketch.draw = () => {
		sketch.background(245, 245, 248);
		sketch.stroke(138);
		sketch.noFill();

		sketch.push();
		rings.forEach((ring) => {
			ring.update();
			ring.draw();
		});
		sketch.pop();
	};

	sketch.mouseMoved = () => {
		if (rings.length > 0) {
			let over = false;
			for (let i = rings.length - 1; i >= 0; i -= 1) {
				if (rings[i].over(sketch.mouseX, sketch.mouseY)) {
					sketch.cursor(sketch.HAND);
					over = true;
					break;
				}
			}
			if (!over) {
				sketch.cursor(sketch.ARROW);
			}
		}
	}

	sketch.mousePressed = () => {
		for (let i = rings.length - 1; i >= 0; i -= 1) {
			const ring = rings[i];
			const path = ring.mousePressed();
			if (path !== false) {
				window.location.href = path;
				break;
			}
		}
	}

	sketch.windowResized = () => {
		sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
	};
}

export const createSketch = (node, _data) => {
	data = _data;
	const p5 = require('p5');
	return new p5(Sketch, node);
}

