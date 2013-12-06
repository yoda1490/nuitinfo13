/*
*
*/
function Listener() {
	
}

/**
 * Formulaire de creation user
 */

Listener.prototype.createUSer = function() {
	
	var pseudo = "user";
	var mdp = "mdr";
	var genre = "TOTO";
	var jour ="12/12/1990";
	var profession = "prof";
	
	
	//Envoi information base de donnees
	acceesDB.createUser(pseudo,mdp,genre,jour,profession);
	//AcceesDB.prototype.creteInteret(pseudo,centreinteret);
};




listener = new Listener();