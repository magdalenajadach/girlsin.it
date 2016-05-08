var ItsGirlsApp = angular.module('ItsGirlsApp', []);

ItsGirlsApp.controller('ItsGirlsController', function($scope, $rootScope, GuardianService){
	GuardianService.getPublicFeed().then(function(response){
		console.log(response);
		$scope.feed = response.data;
	}, function(response){
		console.log('No data!');
	});
});
ItsGirlsApp.factory('GuardianService', ['$http', function($http){
	var service = {
		getPublicFeed: function(){
			var url = 'http://content.guardianapis.com/search?page-size=50&order-by=newest&q=women%20and%20tech&api-key=27f66131-9496-4cf7-b259-f054e97beedc';
			return $http.get(url); 
		}
	};
	return service;
}]); 

ItsGirlsApp.controller('ItsGirlsControllerTest', function($scope, $rootScope, NewYorksTimesService){
	NewYorksTimesService.getPublicFeed().then(function(result){
		console.log(result);
		$scope.feed = result.data;
	}, function(result){
		console.log('No data!');
	});
});	
ItsGirlsApp.factory('NewYorksTimesService', ['$http', function($http){
	var service = {
		getPublicFeed: function(){
			var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101&api-key=5da3b2f28d4f421da53c9edab39514b4';
			return $http.get(url); 
		}
	};
	return service;
}]); 