angular.module('App', [])

.controller('PawController', ['$scope', function($scope) {
  $scope.locale = {}
  $scople.locale.loading_app = "cargando..."
}])
