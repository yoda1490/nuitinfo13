/*
*
*/
function AcceesDB() {
	
}

var mySQLadaptator = "mySQLadaptator";

/**
 * Requete get Info
 */
AcceesDB.prototype.getInfo = function() {
//	alert("alo");
//	accessDB.invokeProcedure(mySQLadaptator,"procedure1",null,listener.updateTexte,loadErrorMessage);
	var invocationData = {
		      adapter:mySQLadaptator,
		      procedure:"procedure1",
		      parameters:[],
		  };
		  var options ={
		      onSuccess:listener.updateTexte,
		      onFailure:loadErrorMessage
		  };
		  
		  WL.Client.invokeProcedure(invocationData, options);
	alert("alsqo");
	//listener.updateTexte();
};

AcceesDB.prototype.createUser = function(pseudo,mdp,genre,jour,ville,profession) {
	var invocationData = {
		      adapter:mySQLadaptator,
		      procedure:"procedureCreate",
		      parameters:[pseudo,mdp,genre,jour,ville,profession],
		  };
		  var options ={
		      onSuccess:loadSuccees,
		      onFailure:loadErrorMessage
		  };
		  
		  WL.Client.invokeProcedure(invocationData, options);
	
};

function loadSuccees(result){
	  alert(result.invocationResult.isSuccessful);
	}

/**
 * General fail function
 * @param result
 */
// TODO load error message. Maybe it can be a pop up
function loadErrorMessage(result){
  alert("LOST " + result.errorCode + ": " +  result.errorMsg);
}


acceesDB = new AcceesDB();