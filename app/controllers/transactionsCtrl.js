(function(){
	angular.module('existingTrans')
			.controller('transactionsCtrl', transactionsCtrl);
			
	transactionsCtrl.$inject = ['$scope', 'transactionData', '$timeout'];
	function transactionsCtrl($scope, transactionData, $timeout){
		var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
		var vm = this;
		
		vm.transactions = transactionData['data'];
		var colors = [];
		var dates = [];
		for(var i = 0; i < vm.transactions.length; i++){
			colors.push(vm.transactions[i]['categoryCode']);
			dates.push(vm.transactions[i]['transactionDate']);
			

		}
		// console.log(dates);
		
		$timeout(function() {
			// console.log(document.getElementById('color-0'));
			for(var j = 0; j < colors.length; j++){
				document.getElementById('color-' + j).style.backgroundColor = colors[j];
				
			}
			for(var k = 0; k < dates.length; k++){
				var d;
				var month;
				var datedm;
				d = new Date(dates[k]);
				month = months[d.getMonth()];
				datem = d.getDate();
				document.getElementById('date-' + k).innerHTML = month.substr(0, 3) + ".  " + datem;
				// console.log(datem);
		}

		}, 10);
		
	}
})();