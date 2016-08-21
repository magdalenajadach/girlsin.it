var GirlsInItApp = angular.module('GirlsInItApp', ['ngRoute']);

GirlsInItApp.config(function($routeProvider) {
	$routeProvider
		.when('/main', {
			templateUrl: 'views/main.html',
			controller: 'GirlsInItController'
		})
		.when('/about/:id', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})
		.otherwise({
			redirectTo: '/main'
		});
});

GirlsInItApp.controller('GirlsInItController', function($scope, $rootScope, GuardianService, NewYorksTimesService, WebhoseService){
	
	$scope.feed = {};
	$scope.feed.results = [];
	$scope.filters = {};
	$scope.filters.guardianFilter = true;
	$scope.filters.nytFilter = true;
	$scope.filters.webhoseFilter = true;

	GuardianService.getPublicFeed().then(function(response){
		$scope.feed.results = addGuardianToResults($scope.feed.results, response);
		console.log($scope.feed);
	}, function(response){
		console.log('No data!');
	});

	NewYorksTimesService.getPublicFeed().then(function(response){
		$scope.feed.results = addNYTToResults($scope.feed.results, response);
		console.log(response);
	}, function(response){
		console.log('No data!');
	});

	WebhoseService.getPublicFeed().then(function(response){
		$scope.feed.results = addWebhoseToResults($scope.feed.results, response);
		console.log($scope.feed);
	}, function(response){
		console.log('No data!');
	});

	$scope.isVisible = function(item) {
		return (item.source == 'GUARDIAN' && $scope.filters.guardianFilter == true) 
			|| (item.source == 'NYT' && $scope.filters.nytFilter == true)
			|| (item.source == 'WEBHOSE' && $scope.filters.webhoseFilter == true);
	};

	function addGuardianToResults(results, response) {
		var resultsFromResponse = response.data.response.results;
		for (var i = 0; i < resultsFromResponse.length; i++) {
			var element = {};
			element.title = resultsFromResponse[i].webTitle;
			element.section = resultsFromResponse[i].sectionName;
			element.source = "GUARDIAN";
			element.date = new Date(resultsFromResponse[i].webPublicationDate);
			element.url = resultsFromResponse[i].webUrl;
			results.push(element);
		}
		console.log(results);
		return results;
	}

	function addNYTToResults(results, response) {
		var resultsFromResponse = response.data.response.docs;
		for (var i = 0; i < resultsFromResponse.length; i++) {
			var element = {};
			element.title = resultsFromResponse[i].headline.main;
			if (resultsFromResponse[i].subsection_name) {
				element.section = resultsFromResponse[i].section_name + ' ' + resultsFromResponse[i].subsection_name; 
			} else {
				element.section = resultsFromResponse[i].section_name;
			}
			element.source = "NYT";
			element.date = new Date(resultsFromResponse[i].pub_date);
			element.url = resultsFromResponse[i].web_url;
			results.push(element);
		}
		console.log(results);
		return results;
	}

	function addWebhoseToResults(results, response) {
		var resultsFromResponse = response.data.posts;
		for (var i = 0; i < resultsFromResponse.length; i++) {
			var element = {};
			element.title = resultsFromResponse[i].thread.title;
			element.section = resultsFromResponse[i].thread.site_type;
			element.source = "WEBHOSE";
			element.date = new Date(resultsFromResponse[i].thread.published);
			element.url = resultsFromResponse[i].thread.url;
			results.push(element);
		}
		console.log(results);
		return results;
	}

});

GirlsInItApp.controller('AboutController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.aboutId = $routeParams.aboutId;
  }]);



GirlsInItApp.factory('GuardianService', ['$http', function($http){
	var service = {
		getPublicFeed: function(){
			var url = 'http://content.guardianapis.com/search?order-by=newest&section=technology&q=women&pageSize=30&api-key=27f66131-9496-4cf7-b259-f054e97beedc';
			return $http.get(url);
		}
	};
	return service;
}]); 

GirlsInItApp.factory('NewYorksTimesService', ['$http', function($http){
	var service = {
		getPublicFeed: function(){
			var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women&fq=tech&sort=newest&api-key=5da3b2f28d4f421da53c9edab39514b4';
			return $http.get(url); 
		}
	};
	return service;
}]);

GirlsInItApp.factory('WebhoseService', ['$http', function($http){
	var service = {
		getPublicFeed: function(){
			var url = 'https://webhose.io/search?token=2d6d2276-1f0c-4d89-beca-4a5d4ad1a50d&format=json&q=%22women%20in%20tech%22%20language%3A(english)%20(site_type%3Anews)';
			return $http.get(url); 
		}
	};
	return service;
}]);

GirlsInItApp.directive('header', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "views/header.html"
  }
});

GirlsInItApp.directive('footer', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "views/footer.html"
  }
});
