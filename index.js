const parseString = require('xml2js').parseString;
const fs = require("fs");

const range = function* (start, end) {
	if (typeof start !== "string" || typeof end !== "string") {
		throw new Error("Couldn't call without strings");
	}

	const sCharCode = start.charCodeAt(0);
	const eCharCode = end.charCodeAt(0);

	let iter = start;
	while (iter != eCharCode + 1) {
		yield iter;
		iter++;
	}
};

for (const it of range('A', 'A')) {
	fs.readFile(`${__dirname}/raw/${it}.xml`, (err, data) => {
		if (err) {
			throw err;
		}

		console.log(parseString(data, (err, result) => {
		    console.dir(result);
		}));
	});
}