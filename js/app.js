var magdaApp = angular.module('magdaApp', []);

magdaApp.controller('MagdaController', function($scope, $rootScope, GuardianService){
	$scope.name = 'Magda';
	GuardianService.getPublicFeed().then(function(response){
		console.log(response);
		$scope.feed = response.data;
	}, function(response){
		console.log('No data!');
	});
});
magdaApp.factory('GuardianService', ['$http', function($http){
	var service = {
		getPublicFeed: function(){
			var url = 'http://content.guardianapis.com/search?page-size=50&order-by=newest&q=women%20and%20tech&api-key=27f66131-9496-4cf7-b259-f054e97beedc';
			return $http.get(url); 
		}
	};
	return service;
}]); 