'use stirct'

let	sudokuField=[[],[],[],[],[],[],[],[],[]]
let leftblock=[];

function RandomDiap(N,M) {
    return Math.floor(
        Math.random()*(M-N+1)
        )+N;
}

var rndm=RandomDiap(1,9);
for (var i = 0; leftblock.length<9; i++) {
	while (leftblock.indexOf(rndm)===-1) {
		leftblock.push(rndm)
	} 
	rndm=RandomDiap(1,9);
}

console.log(leftblock)
