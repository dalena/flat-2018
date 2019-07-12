import inside from 'point-in-polygon';

export default class Ring {
	constructor(sketch, centerX, centerY, radius, txt, path, clr) {
		this.sketch = sketch;
		this.points = [];

		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.txt = txt;
		this.path = path;
		this.clr = clr;
		this.txtClr = 0;
		this.tabPadding = sketch.radians(10);

		this.baseStartAngle = this.getTextStartPosition();
		this.startAngle = this.baseStartAngle;
		this.noiseAmp = this.sketch.random(8);
		this.noiseCurrent = 0;
		this.noiseStep = sketch.random(-0.003, 0.003);
		this.currentRotation = 0;
	}

	getTextStartPosition = () => {
		let start = 0;
		const circ = 2 * this.sketch.PI * this.radius;
		let end = 0;
		for (let i = 0; i < this.txt.length; i += 1) {
			const w = this.sketch.textWidth(this.txt.charAt(i));
			const angleStep = (w / circ) * this.sketch.TWO_PI;
			end += angleStep;
		}

		do {
			start = this.sketch.PI + this.sketch.random(
				this.sketch.radians(10),
				this.sketch.radians(150),
			);
			const sx = Math.cos(start) * this.radius + this.centerX;
			const sy = Math.sin(start) * this.radius + this.centerY;
			const ex = Math.cos(start + end) * this.radius + this.centerX;
			const ey = Math.sin(start + end) * this.radius + this.centerY;
			if (sx > 0 && sy < this.sketch.height && ex < this.sketch.width && ey < this.sketch.height) {
				break;
			}
		} while (true); // eslint-disable-line no-constant-condition

		return start;
	}

	update = () => {
		// const n = this.sketch.noise(this.noiseStep * 0.02, this.radius);
		// this.currentRotation += (n - 0.5) * this.speed;
		// this.noiseStep += this.noiseStep;
		this.noiseCurrent += this.noiseStep;

		const n = (0.5 - this.sketch.noise(this.noiseCurrent, this.radius)) * 0.3;
		// this.startAngle += n;
		this.startAngle = this.baseStartAngle + n;
	}

	draw = () => {
		this.sketch.push();
		this.sketch.translate(this.centerX, this.centerY);
		this.sketch.rotate(this.currentRotation);
		this.drawCircle();
		this.drawText();
		this.sketch.pop();
	}

	mousePressed = () => {
		return this.over(this.sketch.mouseX, this.sketch.mouseY) ? this.path : false;
	}

	over = (x, y) => inside([x - this.centerX, y - this.centerY], this.points);


	drawText = () => {
		this.sketch.noStroke();
		this.sketch.fill(255);

		const circ = 2 * this.sketch.PI * this.radius;
		let angle = this.startAngle;
		for (let i = 0; i < this.txt.length; i += 1) {
			const letter = this.txt.charAt(i);
			const w = this.sketch.textWidth(letter);
			const angleStep = (w / circ) * this.sketch.TWO_PI;
			const x = Math.cos(angle) * this.radius;
			const y = Math.sin(angle) * this.radius;
			this.sketch.push();
			this.sketch.translate(x, y);
			this.sketch.rotate(angle + this.sketch.HALF_PI);
			this.sketch.text(letter, 0, 0);
			this.sketch.pop();
			angle += angleStep;
		}
		this.endAngle = angle;
	}

	drawCircle = () => {
		this.sketch.fill(this.clr);
		this.sketch.noStroke();
		const step = this.sketch.radians(1);
		this.points = [];
		this.sketch.beginShape();

		for (let angle = 0; angle < this.sketch.TWO_PI; angle += step) {
			const n = this.sketch.noise(angle, this.radius) * 10;
			const n2 = (0.5 - this.sketch.noise((angle + this.noiseCurrent) * this.noiseAmp, this.radius)) * 50;

			let pointRadius = this.radius + n + n2;
			if (angle > this.startAngle - this.tabPadding && angle < this.endAngle + this.tabPadding) {
				if (angle > this.startAngle - this.tabPadding && angle < this.startAngle) {
					pointRadius = this.sketch.map(
						angle,
						this.startAngle - this.tabPadding,
						this.startAngle,
						pointRadius,
						pointRadius + 30,
					);
				} else if (angle > this.endAngle && angle < this.endAngle + this.tabPadding) {
					pointRadius = this.sketch.map(
						angle,
						this.endAngle,
						this.endAngle + this.tabPadding,
						pointRadius + 30,
						pointRadius,
					);
				} else {
					pointRadius += 30; // Math.max(this.radius + 28, pointRadius + 28);
				}
			}
			const x = Math.cos(angle) * pointRadius;
			const y = Math.sin(angle) * pointRadius;
			this.points.push([x, y]);
			this.sketch.vertex(x, y);
		}
		this.sketch.endShape(this.sketch.CLOSE);
	}
}
