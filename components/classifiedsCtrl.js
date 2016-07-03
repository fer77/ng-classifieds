(function() {
  "use strict";
  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory) {

//$http returns promisies, which aid with Javascript's asynchronous nature.  
//This means that code can continue to execute and not be blocked while 
//the "promise" continues processing a privious instruction(code).
	classifiedsFactory.getClassifieds().then(function(classifieds) {
		  //the method getClassifieds comes from our factory.
		$scope.classifieds = classifieds.data;
	});

      // $scope.classifieds = 

      // $scope.message = "Hello, Fernando!";

    });
})();
