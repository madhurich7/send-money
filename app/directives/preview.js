(function(){
	angular.module('previewTrans', [])
			.directive('preview', preview);

	function preview(){
		var directive = {
			template: '<div id="preview">' +
							'<header><span>Preview</span></header>' + 
							'<div class="preview-content">' +
								'<p><strong>From Account - </strong>{{vm.frm}}</p>' +
								'<p><strong>To Account - </strong>{{vm.to}}</p>' +
								'<p><strong>Amount - </strong>{{vm.amt | currency}}</p>' +
								'<button ng-click="vm.onTransfer()">Transfer</button>' + 
								'<button style="float:right" ng-click="vm.onCancel()">Cancel</button>' +
							'</div>' +
							
					  '</div>',	
							
						
			controller: 'previewCtrl',
			controllerAs: 'vm'
		};

		return directive;
	}		

})();