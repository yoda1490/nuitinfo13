/*
*
*/
function Listener() {
	
}
/**
 * Update Text
 */

Listener.prototype.updateTexte = function(result) {
	//alert(result.invocationResult.resultSet);
	//alert(result.invocationResult.isSuccessful);
	$("#result").val(result.invocationResult.isSuccessful);
};
/**
 * a changer en "tap"
 */
$("#buttonClick").on("tap",function(event) {
	//$("#result").val("resultat");
	AcceesDB.prototype.getInfo();
});

/**
 * Formulaire de creation user
 */
$("#buttonValider").on("click",function(event){
	
	var pseudo = $("#text-1").val();
	var mdp = $("#password-1").val();
	var genre = "TOTO";
	var jour "12/12/1990";
	var ville = "marseille";
	var profession = "prof";
	var centre interet ="foot";
	
	
	//Envoi information base de donnees
	AcceesDB.prototype.createUser(pseudo,mdp,genre,jour,profession);
	//AcceesDB.prototype.creteInteret(pseudo,centreinteret);
});




listener = new Listener();