var baseColor = '#0066CC';
var addColor = '#2f82d5';
var subColor = '#001F3D';

function hexScaler(initialHex,endHex,hexCount){
	if (initialHex[0] != "#" || endHex[0] != "#"){
		alert('please include hashes in the hex colors that you send to hexScaler!')
	} else {
		var initialR = initialHex[1] + initialHex[2];
		var initialG = initialHex[3] + initialHex[4];
		var initialB = initialHex[5] + initialHex[6];
	}
};

function convertTwoDigitHexToNumber(hex){
	var ones = hex[1];
	var tens = hex[0];
	var converted = HexDigitToInt(ones) + (HexDigitToInt(tens) * 10);
	return converted;
};

function HexDigitToInt(letter){
	var converted = letter.replace(/a/gi,10)
	.replace(/b/gi,11)
	.replace(/c/gi,12)
	.replace(/d/gi,13)
	.replace(/e/gi,14)
	.replace(/f/gi,15);
	return parseInt(converted);
};