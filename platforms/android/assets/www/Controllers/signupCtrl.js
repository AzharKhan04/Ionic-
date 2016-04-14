angular.module('shopApp').controller('signupController',function($auth,$scope,$state,$ionicPopup){

    $scope.signup=function(){
    var credentials = {
      email:$scope.email,
      password:$scope.password,
      name:$scope.name,
      contact:$scope.contactNo
    };
    $http({
      method: 'POST',
      url: 'http://54.86.64.100:3000/api/v1/user/signup',
      data: credentials,
      headers: {'Content-Type': 'application/json'}
    }).success(function (response, status) {
      // $auth.setToken(response);
      alert("successfully signup please login here");
      $location.path('/login');
    }).error(function (response, status) {
      alert(status + "error");
      alert(response);
      alert("not sign up");
    });
  };
});
