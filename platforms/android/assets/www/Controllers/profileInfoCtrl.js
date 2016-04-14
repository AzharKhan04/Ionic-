//This is profileInfo controller
angular.module('shopApp').controller('profileInfoCtrl',profileInfoCtrl);
function profileInfoCtrl($scope,$cordovaCamera){

  $scope.profileInfoCtrl="true";
  alert("Profile Info Controller");
  $scope.selectImage=function(){
    alert("inside selectImage function");
  }

  $scope.uploadPic=function(){
    alert("inside uploas profile picture function");
    document.addEventListener("deviceready", function () {
    alert('fdgfdgd');
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
        alert('error');
      });

    }, false);
  }
}

