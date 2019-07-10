/* eslint-disable import/prefer-default-export */
export function luminanace(r, g, b) {
	const a = [r, g, b].map((v) => {
		const vv = v / 255;
		return vv <= 0.03928
			? vv / 12.92
			: Math.pow((vv + 0.055) / 1.055, 2.4); // eslint-disable-line no-restricted-properties
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function contrast(r, g, b, r2, g2, b2) {
	return (luminanace(r, g, b) + 0.05)
		/ (luminanace(r2, g2, b2) + 0.05);
}
