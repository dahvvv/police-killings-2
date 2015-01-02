function hexScaler(initHex,endHex,hexCount){
	if (initHex[0] != "#" || endHex[0] != "#"){
		alert('please include hashes in the hex colors that you send to hexScaler!');
	} else {
		var initR = initHex[1] + initHex[2];
		var initRNum = convertTwoDigitHexToNum(initR);
		var initG = initHex[3] + initHex[4];
		var initGNum = convertTwoDigitHexToNum(initG);
		var initB = initHex[5] + initHex[6];
		var initBNum = convertTwoDigitHexToNum(initB);
		var endR = endHex[1] + endHex[2];
		var endRNum = convertTwoDigitHexToNum(endR);
		var endG = endHex[3] + endHex[4];
		var endGNum = convertTwoDigitHexToNum(endG);
		var endB = endHex[5] + endHex[6];
		var endBNum = convertTwoDigitHexToNum(endB);
		var rNumArr = [];
		var gNumArr = [];
		var bNumArr = [];
		var hexArr = [];

		for (i = 0; i < hexCount; i++){
			rNumArr.push(hexScale(initRNum,endRNum,i,hexCount));
			gNumArr.push(hexScale(initGNum,endGNum,i,hexCount));
			bNumArr.push(hexScale(initBNum,endBNum,i,hexCount));
		};
		var rHexArr = $.map(rNumArr, function(val){
			return convertNumToTwoDigitHex(val);
		});
		var gHexArr = $.map(gNumArr, function(val){
			return convertNumToTwoDigitHex(val);
		});
		var bHexArr = $.map(bNumArr, function(val){
			return convertNumToTwoDigitHex(val);
		});
		for (i = 0; i < hexCount; i++){
			hexArr.push("#" + rHexArr[i] + gHexArr[i] + bHexArr[i]);
		};
		return hexArr;
	}
};

function hexScale(init,end,i,count){
	return init + Math.floor(i * ((end - init) / (count - 1)));
};

function convertTwoDigitHexToNum(hex){
	var ones = hex[1];
	var tens = hex[0];
	var converted = HexDigitToInt(ones) + (HexDigitToInt(tens) * 16);
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

function convertNumToTwoDigitHex(num){
	var ones = num % 16;
	var fifteens = (num - ones) / 16;
	var converted = (IntToHexDigit(fifteens) + IntToHexDigit(ones));
	return converted;
};

function IntToHexDigit(i){
	var converted = i.toString()
	.replace('10','A')
	.replace('11','B')
	.replace('12','C')
	.replace('13','D')
	.replace('14','E')
	.replace('15','F');
	return converted;
};

var baseColor = '#0066CC';
var secondColor = '#FF0000';
var addColor = '#2f82d5';
var subColor = '#001F3D';
