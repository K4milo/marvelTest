app.service('api',['$http', '$q', function($http){
	//variable de objeto api (atributo)

	this.lastEndPoint = null;

	this.get = function(endPoint){

		//Services vars
		var apiUrl = 'http://gateway.marvel.com/v1/public/',
	        apiKey = 'e6603fe76c64a455dd284bd07f0e44b3',
	        hash = '2a72005214326a19a24a57b904bb54e2',
	        deferred = $q.defer();

		$http.get(apiUrl + endPoint).then(function(response){

			deferred.resolve(response);
			console.log(response);

		}, function(error){

			deferred.reject(error);

		});
	}

}]);