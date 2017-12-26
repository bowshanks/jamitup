angular.module('jamitup').controller('mainCtrl',function($scope, $location){
  $scope.scrollTo = function (anchor) {
    $location.hash(anchor);
  }

  $scope.recipe1 = true;
  $scope.switchRecipe = function(n) {
    if (n === 1) {
      $scope.recipe1 = true;
      $scope.recipe2 = false;
      $scope.recipe3 = false;
    }
    if (n === 2) {
      $scope.recipe1 = false;
      $scope.recipe2 = true;
      $scope.recipe3 = false;
    }
    if (n === 3) {
      $scope.recipe1 = false;
      $scope.recipe2 = false;
      $scope.recipe3 = true;
    }
  }
});
