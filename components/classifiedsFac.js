(function () {

	"use strict";

//$http requests are housed in services, or in this case, a factory.
//This way our $http can be defined one time:
		//Take the name of the factory('classifiedsFactory') and injected where needed.
	angular
		.module('ngClassifieds')
		.factory('classifiedsFactory', function($http) {
			function getClassifieds() {
// $http communicates with the server through the methods:
// 	POST: Sends data(somewhere).
// 	GET: Retrives data.
// 	PUT: Edits data.
// 	DELETE: Deletes data.

// 	Get data from classifieds.json

				return $http.get('data/classifieds.json');
			}

			return {
				getClassifieds: getClassifieds
			}
		})
})();