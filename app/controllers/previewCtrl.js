(function(){
	angular.module('previewTrans')
			.controller('previewCtrl', previewCtrl);

	previewCtrl.$inject = ['$stateParams', '$state', 'accountData', 'transactionData'];		

	function previewCtrl($stateParams, $state, accountData, transactionData){
				var vm = this;
				console.log($stateParams);
				var data = $stateParams;
				vm.amt = data.amt;
				vm.frm = data.frm;
				vm.to = data.to;
				vm.onTransfer = onTransfer;
				vm.onCancel = onCancel;

				function onTransfer(){
					var data = accountData;
					var transactions;
					var today = new Date();
					var msec = today.getTime();
					var color = colorGen();

					//update the amount after deduction
					data['frm']['available'] = data['frm']['available'] - vm.amt;
					transactions = transactionData['data'];
					transactions.unshift({
						"amount": vm.amt,
						"merchant": vm.to,
						"categoryCode": color,
						"transactionDate": msec,
						"transactionType": "Card Payment"
					});

					$state.go('home');
				}

				function onCancel(){
					$state.go('home');
				}

				function colorGen(){
					return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
				}	
			}




})();