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

function RandomDiap_for_i(N,M) {
    return Math.floor(
        Math.random()*(M-N+1)
        )+N;
}

function RandomDiap_for_blocks(N,M) {
    var x = Math.floor(
        Math.random()*(M-N+1)
        )+N;
    if (x>=0 && x<=3) {
    	return 0;
    } else 
    if (x>=3 && x<=6) {
    	return 3;
    } else return 6;
}

console.log(RandomDiap_for_blocks(1,9))
//////// заменяем столбцы на строки
var transposingArr = sudokuField.map(function(col, i) { 
  return sudokuField.map(function(row) { 
    return row[i] 
  })
});


function shuffle_i(x,y) {
	var b = transposingArr.splice(x,1);
	transposingArr.splice(y,0,b[0]);
}

function shuffle_block(x,y) {
	var b = transposingArr.splice(x,3);
	transposingArr.splice(y,0,b[0],b[1],b[2]);
}

function shuffle_Vertical(x,y) {
	for (var i = 0; i < transposingArr.length; i++) {
		var b = transposingArr[i].splice(x,1);
		transposingArr[i].splice(y,0,b);
	}
}

function shuffle_Vertical_block(x,y) {
	for (var i = 0; i < transposingArr.length; i++) {
		var b = transposingArr[i].splice(x,3);
		transposingArr[i].splice(y,0,b[0],b[1],b[2]);
	}
}


// ///// тасование блоков по вертикали;
// shuffle_Vertical_block(RandomDiap_for_blocks(1,9),RandomDiap_for_blocks(1,9))

// ///// тасование  по вертикали в блоках
// shuffle_Vertical(RandomDiap_for_i(0,2),RandomDiap_for_i(0,2))
// shuffle_Vertical(RandomDiap_for_i(3,5),RandomDiap_for_i(3,5))
// shuffle_Vertical(RandomDiap_for_i(6,8),RandomDiap_for_i(6,8))
// //// тасование блоков по горизонтали
// shuffle_block(RandomDiap_for_blocks(1,9),RandomDiap_for_blocks(1,9))


// //// Тасование по горизонтали в блоках
// shuffle_i(RandomDiap_for_i(0,2),RandomDiap_for_i(0,2));
// shuffle_i(RandomDiap_for_i(3,5),RandomDiap_for_i(3,5))
// shuffle_i(RandomDiap_for_i(6,8),RandomDiap_for_i(6,8))

function counShuffle(count) {
	
	while (count>0) {
		shuffle_Vertical_block(RandomDiap_for_blocks(1,9),RandomDiap_for_blocks(1,9))
		
		///// тасование  по вертикали в блоках
		shuffle_Vertical(RandomDiap_for_i(0,2),RandomDiap_for_i(0,2))
		shuffle_Vertical(RandomDiap_for_i(3,5),RandomDiap_for_i(3,5))
		shuffle_Vertical(RandomDiap_for_i(6,8),RandomDiap_for_i(6,8))
		//// тасование блоков по горизонтали
		shuffle_block(RandomDiap_for_blocks(1,9),RandomDiap_for_blocks(1,9))
		
		
		//// Тасование по горизонтали в блоках
		shuffle_i(RandomDiap_for_i(0,2),RandomDiap_for_i(0,2));
		shuffle_i(RandomDiap_for_i(3,5),RandomDiap_for_i(3,5))
		shuffle_i(RandomDiap_for_i(6,8),RandomDiap_for_i(6,8))
		count--
	}
}
counShuffle(1000)
var field = document.getElementById('field')

function fieldFPS () {
        function FF (V,I,A) {
        var br = document.createElement('br');
        	for (var i = 0; i < V.length; i++) {
        		var span = document.createElement('span');
        		var txt = document.createTextNode(V[i]);
  				field.appendChild(span);
  				span.appendChild(txt);
        	}
        	field.appendChild(br)
        }
        transposingArr.forEach(FF)
}
fieldFPS ()

