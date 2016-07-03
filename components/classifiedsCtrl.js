(function() {
  "use strict";
  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory, $mdSidenav) {

//$http returns promisies, which aid with Javascript's asynchronous nature.
//This means that code can continue to execute and not be blocked while
//the "promise" continues processing a privious instruction(code).
	classifiedsFactory.getClassifieds().then(function(classifieds) {
		  //the method getClassifieds comes from our factory.
		$scope.classifieds = classifieds.data;
    $scope.openSidebar = function() {
      //sidebar open
      $mdSidenav('left').open();
    }
    $scope.closeSidebar = function() {
      //sidebar close
      $mdSidenav('left').close();
    }
	});

      // $scope.classifieds =

      // $scope.message = "Hello, Fernando!";

    });
})();
