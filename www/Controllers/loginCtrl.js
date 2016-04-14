//Login Controler having login function
angular.module('shopApp').controller('loginController',function($scope,$auth,$state, $ionicPopup) {
// Assign $scope service to vm
   var a=$scope.userName;
  //login function to authenticate user using credentials
  $scope.login=function(){
    var credentials={
      email:$scope.userName,
      password:$scope.userPass
    }
    // alert(credentials);
    // alert("inside Login");
    // alert(a);

    //use
    $auth.login(credentials).then(function(response){
      alert(response);
      if($auth.isAuthenticated()){
        alert("logged in");
        $state.go('home',{});
      }
      else{
        $ionicPopup.alert( {
          title: 'ohhh You entered wrong user name/password',
          template: 'Please Enter Again'
        });
        alert("invalid email or password");
      }
    }).catch(function(response){
      alert(response);
    });
  }
});
