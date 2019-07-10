import { navigate } from "gatsby";

import Ring from './Ring';

import fontURL from './fonts/Mukta-Regular.ttf';

const MIN_RADIUS = 400;

let font = false;
let rings = [];
let centerX = 0;
let centerY = 0;
let data = [];

export const setData = (_data) => {
	data = _data;
};

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
				val.path,
				sketch.lerpColor(sketch.color(26, 22, 82), sketch.color(238), (data.length - i) / data.length),
			));
		});
	};

	sketch.draw = () => {
		sketch.background(255);

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
				navigate(path);
				break;
			}
		}
	}

	sketch.windowResized = () => {
		sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
	};
}

export default Sketch;

// export default class Sketch extends p5 {

// 	constructor(node) {
// 		super(() => {}, node);
// 		console.log('constructor');
// 	}

// 	setup = () => {
// 		this.loadFont(fontURL, (font) => {
// 			this.createCanvas(this.windowWidth, this.windowHeight);
// 			this.font = font;
// 			this.textSize(22);
// 			this.textFont(this.font);

// 			this.centerX = this.width * 0.5;
// 			this.centerY = this.height + 300;
// 			const maxRadius = this.height * 0.7;
// 			const radiusStep = maxRadius / data.length;

// 			this.rings = data.map((val, i) => new Ring(
// 				this,
// 				this.centerX,
// 				this.centerY,
// 				MIN_RADIUS + (radiusStep * (data.length - i - 1)),
// 				val.author.toUpperCase(),
// 				this.lerpColor(this.color(26, 22, 82), this.color(238), (data.length - i) / data.length),
// 			));
// 		});
// 	};

// 	draw = () => {
// 		this.background(255);

// 		this.stroke(138);
// 		this.noFill();

// 		this.push();
// 		this.rings.forEach((ring) => {
// 			ring.update();
// 			ring.draw();
// 		});
// 		this.pop();
// 	};

// 	mousePressed = () => {
// 	}

// 	windowResized = () => {
// 		this.resizeCanvas(this.windowWidth, this.windowHeight);
// 	};
// }
