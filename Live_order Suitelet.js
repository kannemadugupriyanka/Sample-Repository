/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       12 Jun 2015     Priyanka
 *
 */

/**
 * @param {nlobjRequest} request Request object
 * @param {nlobjResponse} response Response object
 * @returns {Void} Any output is written via response object
 */
function suitelet(request, response){
	var authorization = "NLAuth nlauth_account=445393,nlauth_email=lionel5@sixred.com,nlauth_signature=Netsuite01,nlauth_role=3";
	var headers = new Array();
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = authorization;
    headers['User-Agent-x'] = 'SuiteScript Call';
    
	var response = nlapiRequestURL('http://lionelsandbox.com/shopflow-1-05-0/services/live-order.ss?n=9&internalid=cart',null,headers,null,'PUT');
	nlapiLogExecution('DEBUG','response',response);
}
