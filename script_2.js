//======================================================================//   
//========================= Calcul de factorielle ======================//
//======================================================================//

var result = 1;
let number = prompt("De quel nombre veux-tu calculer la factorielle ?")

function factorial(number) {

	if (number === 0 || number === 1 ){
			console.log("Le résultat est 1 ! Et oui, car l\'origine de la table multiplicative est 1 et non 0 !!")
}

	else if (number < 0) {
			console.log("pffff bleusaille !!")
}

	else {
		for (let i = 1; i <= number; i++){

			result = result * i;
			}
			return result
}

}
	
console.log("Le résultat est : " + factorial(number))