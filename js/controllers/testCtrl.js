angular.module('jamitup').controller('testCtrl',function($scope, $location){
  $scope.isLoading = true;

  function getSMSUrl() {
    return new Promise(function(resolve, reject) {
      var ua = navigator.userAgent.toLowerCase();
      var url;

      if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1)
          {
            url = "sms:1-408-555-1212?body=" + encodeURIComponent("I'm at ");
          }
      else
          {
            url = "sms:1-408-555-1212?body=" + encodeURIComponent("I'm at ");
          }
      resolve(url);
    });
  }

  getSMSUrl()
  .then(function(value) {
    $scope.isLoading = false;
    $scope.url = value
    location.href = $scope.url;
  }, function(reason) {
    console.error('getSMSUrl',reason);
  })

});
