(function(){
'use strict';
angular.module("firstApp", [])

.controller("firstController", displayState);

function displayState($scope){
  $scope.values = "";
  $scope.message = '';

  $scope.display = function(){
  if ($scope.values === ''){
    $scope.message = "Please enter data first";
  }
  else{
    var numberOfItems = $scope.values.split(",").length;
    if (numberOfItems <= 3){
      $scope.message = "Enjoy!";
    }
    else{
      $scope.message = "Too Much!";
    }
  }
}
}

})();
