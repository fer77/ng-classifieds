(function() {
  "use strict";
  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($scope) {

      $scope.classified = {
        title:'Cat Speedster',
        price: '1,000,000 republic credits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      };

      $scope.message = "Hello, Fernando!";

    });
})();
