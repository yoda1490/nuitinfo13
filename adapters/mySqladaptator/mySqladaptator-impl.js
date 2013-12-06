/*
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
var procedure1Statement = WL.Server.createSQLStatement("select * from nuitinfo13.TEST;");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
var procedure2Statement = WL.Server.createSQLStatement("INSERT INTO nuitinfo13.User SET pseudo=?,password=?,sex=?,birth=?,job=?;");
function procedureCreate(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure2Statement,
		parameters : [param]
	});
}


