//======================================================================//   
//======================== La pyramide de Mario ========================//
//======================================================================//

let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
var esp = " ";
var hash = "#";

number = Number(number)   // je sais pas pourquoi, mais il me dit que c'est un "string" sans ça !

	function pyramid(number){

		for (let i = 1; i <= number; i++){


			result = (esp.repeat(number - i) + hash.repeat(i));
			console.log(result)
			}
	}       console.log(pyramid(number))   // Il ne m'écrit rien si je ne laisse pas cette ligne !
