angular.
  module("gitclub").
  controller("homeController2", homeController2)

homeController2.$inject = ["$scope"]

function homeController2($scope) {
  $scope.thing = "Other World"
}
