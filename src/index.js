module.exports = function reverse (n) {
    let result = Math.abs(n).toString();
	let rev = "";
	for(let i = 0; i < result.length; i++) {
		rev = result[i] + rev;
	}

	return +rev
}
