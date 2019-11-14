//======================================================================//   
//======================= Code de la VIIIIEE !!! =======================// 
//======================================================================//

// table d'association entre codons et acides aminés :
const assoc = [
	{ code: "UCU", name : "Sérine"},
	{ code: "UCC", name : "Sérine"},
	{ code: "UCA", name : "Sérine"},
	{ code: "UCG", name : "Sérine"},
	{ code: "AGU", name : "Sérine"},
	{ code: "AGC", name : "Sérine"},
	{ code: "CCU", name : "Proline"},
	{ code: "CCC", name : "Proline"},
	{ code: "CCA", name : "Proline"},
	{ code: "CCG", name : "Proline"},
	{ code: "UUA", name : "Leucine"},
	{ code: "UUG", name : "Leucine"},
	{ code: "UUU", name : "Phénylalanine"},
	{ code: "UUC", name : "Phénylalanine"},
	{ code: "CGU", name : "Arginine"},
	{ code: "CGC", name : "Arginine"},
	{ code: "CGA", name : "Arginine"},
	{ code: "CGG", name : "Arginine"},
	{ code: "AGA", name : "Arginine"},
	{ code: "AGG", name : "Arginine"},
	{ code: "UAU", name : "Tyrosine"},
	{ code: "UAC", name : "Tyrosine"},
];

//let arn = "CCGUCGUUGCGCUACAGC" ;                //===>>>>>  Commente la ligne que tu ne veux PAS tester !!
let arn = "CCUCGCCGGUACUUCUCG"          
var codon = [];

for(var i = 0; i <= ((arn.length /3) -1); i++){    

	let j = (3*i)

		codon[i] = arn.substring(j,j+3);
}   

for (var k = 0; k <= (assoc.length-1); k++){                         // ici j'ai fait des boucles imbriquées pour passer tous les codons, 
	for (var m = 0; m <= (assoc.length -1); m++){                    // et passer en revue toute la table pour trouver le  bon a.a.... 
                                                                     // il y a probablement plus simple !
	if (codon[k] === assoc[m].code) {console.log(assoc[m].name); 
	}
	}
}