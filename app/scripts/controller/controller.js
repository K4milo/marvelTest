app.controller('MainController',['$scope','Personaje',function($scope,Personaje){
	$scope.varTest = 1;
	console.log($scope.varTest);
	$scope.search = {};

	$scope.processForm = function(form){
		console.log(form);
		if(form.$valid === true){
			console.log($scope.search);
		}
	}
}]);