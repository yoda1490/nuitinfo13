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
//$("#buttonValider").bind("click",function(event){
Listener.prototype.createUSer = function() {
	
	var pseudo = "user";
	var mdp = "mdr";
	var genre = "TOTO";
	var jour ="12/12/1990";
	var profession = "prof";
	
	
	//Envoi information base de donnees
	acceesDB.createUser(pseudo,mdp,genre,jour,profession);
	alert("yo");
	//AcceesDB.prototype.creteInteret(pseudo,centreinteret);
};




listener = new Listener();