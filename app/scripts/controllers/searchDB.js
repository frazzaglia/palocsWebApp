'use strict';

angular.module('palocsApp.searchDbCtrlModule', [])
  .controller('SearchDbCtrl', ['$scope', '$http', 'DbServ', '$log', function($scope, $http, DbServ, $log) {
    $scope.search = function() {
      console.log("Chiamo il server: " + $scope.searchType);
      var promise;
      if($scope.searchType == "Author"){
        console.log("Cerco l'autore. ");
        promise = DbServ.getAuthors("pippoN");
      }
      else {
        console.log("Cerco il libro. ");
        promise = DbServ.getBooks("pippoN");
      }
      promise.then(
        function(success) {
          console.log(success.data);
          $scope.result = success.data;
        },
        function(error) {
          $log.error("Error loading author");
        });
    };

    $scope.delete = function(username) {
      if (confirm("Are you sure to delete " + username + "?")) {
        console.log("Rimuovo: " + username);
      }
    };
  }]);
