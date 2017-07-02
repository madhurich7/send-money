(function(){
	//'use strict';
	angular.module('existingTrans', [])
			.directive('transactions', transactions);

	function transactions(){
		var directive = {
			template: '<div id="transactions">' + 
						'<header><img style="float:left;" src="../assets/icons/briefcase.png"/><span>Recent Transactions</span></header>' +
						'<div class="table-content">' + 
							'<table>' + 
								'<tr ng-repeat="item in vm.transactions">' + 
									'<td id="color-{{$index}}"></td>' +
									'<td id="date-{{$index}}" "class="center"></td>' + 
									'<td class="center"><img src="{{item[\'merchantLogo\']}}" width="30" height="30"/></td>' + 
									'<td><span class="merchant">{{item["merchant"]}}</span><br/><span class="type">{{item["transactionType"]}}</span></td>' + 
									'<td class="center">-{{item["amount"] | currency}}</td>' + 	
								'</tr>' + 
							'</table>' +
						'</div>' +
						
					  '</div>',
			controller:'transactionsCtrl',
			controllerAs: 'vm'
		};
		return directive;
	}

	
			
})();