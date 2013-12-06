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


/** 
 * General function for invoke procedure adaptator
 */
AccessDB.prototype.invokeProcedure = function (nameAdapator,nameProcedure,ListParameter,succees,failure){
	alert("dans invoke procedure");
	var invocationData = {
		      adapter:nameAdapator,
		      procedure:nameProcedure,
		      parameters:[ListParameter]
		  };
		  var options ={
		      onSuccess:listener.updateTexte,
		      onFailure:failure
		  };
		  
		  WL.Client.invokeProcedure(invocationData, options);
} ;

/**
 * General fail function
 * @param result
 */
// TODO load error message. Maybe it can be a pop up
function loadErrorMessage(result){
  alert("LOST " + result.errorCode + ": " +  result.errorMsg);
}


acceesDB = new AcceesDB();