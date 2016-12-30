app.factory('Personaje',['api','$q',function(api,$q){
	var personaje = {
		data: null,
		get: function(data){

			var deferred = $q.defer();

			api.get(data).then(function(response){

				deferred.resolve(response);
				console.log(response);
			}, function(error){
				deferred.reject(error);
			});
			console.log();
		}
	}
	return personaje;
}]);