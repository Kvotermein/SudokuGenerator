'use stirct'

let	sudokuField=[
	[1,2,3,4,5,6,7,8,9],
	[4,5,6,7,8,9,1,2,3],
	[7,8,9,1,2,3,4,5,6],
	[2,3,4,5,6,7,8,9,1],
	[5,6,7,8,9,1,2,3,4],
	[8,9,1,2,3,4,5,6,7],
	[3,4,5,6,7,8,9,1,2],
	[6,7,8,9,1,2,3,4,5],
	[9,1,2,3,4,5,6,7,8]
]
// let leftblock=[1,2];

function RandomDiap(N,M) {
    return Math.floor(
        Math.random()*(M-N+1)
        )+N;
}




function shuffle_i(x,y) {
	var b = sudokuField.splice(x,1);
	sudokuField.splice(y,0,b[0])
}
function shuffle_block(x,y) {
	var b = sudokuField.splice(x,3);
	sudokuField.splice(y,0,b[0],b[1],b[2])
}

function shuffle_Vertical(x,y) {
	for (var i = 0; i < sudokuField.length; i++) {
		var b = sudokuField[i].splice(x,1);
		sudokuField[i].splice(y,0,b);
	}
}
function shuffle_Vertical_block(x,y) {
	for (var i = 0; i < sudokuField.length; i++) {
		var b = sudokuField[i].splice(x,3);
		sudokuField[i].splice(y,0,b[0],b[1],b[2]);
	}
}


/////// тасование блоков по вертикали;
// shuffle_Vertical_block(0,3)

/////// тасование  по вертикали в блоках
// shuffle_Vertical(0,0)

////// тасование блоков по горизонтали
// shuffle_block(6,3)


////// Тасование по горизонтали в блоках
// var xRandom_1 = RandomDiap(0,2);
// var yRandom_1 = RandomDiap(0,2);
// shuffle_i(xRandom_1,yRandom_1);
// shuffle_i(RandomDiap(3,5),RandomDiap(3,5))
// shuffle_i(RandomDiap(6,8),RandomDiap(6,8))

console.log(sudokuField);


var field = document.getElementById('field')

function fieldFPS () {
        function FF (V,I,A) {
        var br = document.createElement('br');
        	for (var i = 0; i < V.length; i++) {
        		var txt = document.createTextNode(V[i]);
  				field.appendChild(txt);
        	}
        	field.appendChild(br)
        }
        sudokuField.forEach(FF)
}
fieldFPS ()

// leftblock.sort(compareRandom)

// console.log(leftblock)
