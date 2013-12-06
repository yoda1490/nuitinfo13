/*
*
*/
function Listener() {
	
}
/**
 * Update Text
 */

Listener.prototype.updateTexte = function(result) {
	alert(result.invocationResult.resultSet);
	alert(result.invocationResult.isSuccessful);
	$("#result").val("resultat2");
};
/**
 * a changer en "tap"
 */
$("#buttonClick").on("click",function(event) {
	//$("#result").val("resultat");
	AcceesDB.prototype.getInfo();
});


/**
 *Callback when nurse report a task
 *@callback
 */
/*Listener.prototype.callbackgetInfo = function(result){
	if (result.invocationResult.reportTaskResponse.hasOwnProperty("error")){
		ViewManager.prototype.displayError(result.invocationResult.reportTaskResponse.error);
	} else{
		boolean = (result.isSuccessful == "true" ) ? true : false;
		if(boolean) {
			alert("success");
			alert(result.resultSet);
		}
		else {
			alert("Fail to report this task.");
			alert(result.resultSet);
		}
	}
};*/




listener = new Listener();