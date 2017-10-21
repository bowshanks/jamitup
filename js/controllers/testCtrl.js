angular.module('jamitup').controller('testCtrl',function($scope, $location){
  $scope.isLoading = true;
  $scope.tag = document.getElementById('link');
  console.log($scope.tag);


  getSMSUrl()
  .then(function(value) {
    $scope.isLoading = false;
    $scope.url = value;
    $scope.tag.setAttribute("href", value);
    location.href = $scope.url;
    $scope.$apply();
  }, function(reason) {
    console.error('getSMSUrl',reason);
  });

  function getSMSUrl() {
    return new Promise(function(resolve, reject) {
      var ua = navigator.userAgent.toLowerCase();
      var url;

      if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1)
          {
            url = "sms:1-408-555-1212&body=" + encodeURIComponent("HELLO WORLD");
          }
      else
          {
            url = "sms:1-408-555-1212?body=" + encodeURIComponent("HELLO WORLD");
          }

      setTimeout(setCountDown3,800);
      setTimeout(setCountDown2,1600);
      setTimeout(setCountDown1,2400);
      setTimeout(function(){
        resolve(url);
      },2600);
    });
  }

  function setCountDown3() {
    $scope.countDown3 = {'color': 'black'}
    $scope.$apply();
  }

  function setCountDown2() {
    $scope.countDown2 = {'color': 'black'}
    $scope.$apply();
  }

  function setCountDown1() {
    $scope.countDown1 = {'color': 'black'}
    $scope.$apply();
  }

});
