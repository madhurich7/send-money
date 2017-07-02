(function(){
	'use strict';
	angular.module('makeATrans', [
					'ui.router',
					'newTrans', 
					'existingTrans',
					'previewTrans'
					]);
	angular.module('makeATrans')
			.config(config);

	config.$inject = ['$urlRouterProvider', '$stateProvider'];		

	function config($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				template: '<transfer></transfer><transactions></transactions>'
			})
			.state('preview', {
				url: '/preview',
				params: {
					frm: null,
					to: null,
					amt: null
				},
				template: '<preview></preview>'
			});

	}		
})();