(function(){
	angular.module('makeATrans')
			.factory('accountData', accountInfo);

	var data = {
		"frm": {
			"accountName": "Checking",
			"accountNumber": 4692,
			"available": 5824.76
		},
		"to": null,
		"amt": 0
	};		

	function accountInfo(){
		return data;
	}

})();