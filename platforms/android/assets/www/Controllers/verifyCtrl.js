angular.module('shopApp').controller('verifyCtrl',verify);
//verify Controller
function verify($scope,$http,$state,$ionicPopup,$q,verifyNumberService,$cordovaSms,$ionicPlatform) {
  //get countries list
  verifyNumberService.getCountries().then(function(result){
    $scope.countries=result;
  },
  function(error){
  });
  $scope.verify = function () {
    //Credentials
    var num = $scope.phoneNum;
    var code = $scope.code;

    //use verifyNumber service
    verifyNumberService.verify()
      .then(
        function (result) {

          if (result == "Successfully data save...") {
            //alert and navigate to profile Info state
            $ionicPopup.alert({
              title: 'Registered',
              template: 'Thanks For Signup'
            });
            $ionicPlatform.ready(function() {
              alert("in device ready function")
              sendOtp();
            });

            $state.go('profileInfo');
          }
          else if (result == "Already Exist") {
            $ionicPopup.alert({
              title: 'Number Exist',
              template: 'This Number is Registered'
            });
          }
          else {
            $ionicPopup.alert({
              title: 'Invalid Number',
              template: 'Please Enter Valid Number'
            });
          }
        },
        function (error) {
          $ionicPopup.alert({
            title: 'Sorry',
            template: 'Server Error'
          });
        });
    //console.log("first it willexecute");

  }
  function sendOtp() {
    alert("inside send otp");
    $cordovaSms
      .send('+919765293765', "Hi there",{})
      .then(function () {
        // Success! SMS was sent
        alert("success")
        console.log('Success');
      }, function (error) {
        // An error occurred
        alert("error");
        console.log(error);
      });//then
   alert("send otp");
  }

  //This is function to get picture from device image gallery and will set as profile picture of user
  $scope.uploadPic=function(){
    alert("inside upload picture function");
  }
//
}
