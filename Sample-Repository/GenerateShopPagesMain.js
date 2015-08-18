/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       08 Jul 2015     Priyanka
 *
 */

/**
 * @param {String} type Context Types: scheduled, ondemand, userinterface, aborted, skipped
 * @returns {Void}
 */
function scheduled(type) {
	var status1=nlapiScheduleScript('customscript_generate_shop_pages1', 'customdeploy_generate_shop_pages1');
	nlapiLogExecution('DEBUG', 'status of Shop Main page And New Releases', status1);
	var status2=nlapiScheduleScript('customscript_generate_shop_pages2', 'customdeploy_generate_shop_pages2');
	nlapiLogExecution('DEBUG', 'status of Preorder And Best Seller', status2);
	var status3=nlapiScheduleScript('customscript_generate_shop_pages3', 'customdeploy_generate_shop_pages3');
	nlapiLogExecution('DEBUG', 'status of Deals And Staff Picks', status3);

}
