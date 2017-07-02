(function(){
	//'use strict';
	angular.module('newTrans', [])
			.directive('transfer', transfer);

	function transfer(){
		var directive = {
			template: '<div id="transfer" class="trans">' + 
						'<header><img style="float:left;" src="../assets/icons/arrows.png"/><span>Make a Transfer</span></header>' +
						'<form>' +
							'<div class="form-group">' + 
								'<label for="from">from account</label><br/>' + 
								'<input type="text" ng-model="tc.disabledString" readonly disabled/><br/>' + 
							'</div>' +
							'<div class="form-group">' + 
								'<label for="to">to account</label><br/>' +
								'<input type="text" ng-model="tc.to"/><br/>' +
							'</div>' +
							'<div class="form-group">' +	
								'<label for="amount">amount</label><br/>' +
								'<input type="text" ng-model="tc.amt"/><br/>' +
							'</div>' +
							'<div class="form-group submit">' + 
								'<button class="btn" ng-click="tc.onSubmit(tc.disabledString, tc.to, tc.amt)">Submit</button>' + 
							'</div>' +	
							
						'</form>' +
					  '</div>',
			controller:'transferCtrl',
			controllerAs: 'tc'
		};
		return directive;
	}

		
})();