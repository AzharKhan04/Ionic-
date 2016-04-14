//this is service to sent Phone number to server
angular.module('shopApp').service('verifyNumberService',verifyNumber);
function verifyNumber($http,$q){
  //this is deferred object that can be resolve or reject
  var d=$q.defer();
  this.verify=function(){
    return $http.post('http://54.86.64.100:3000/api/v1/user/mobile/+91-8865124582/john').then(function(response){
      //Promise fulfilled,resolve promise
      d.resolve(response.data);
      //return promise
      return d.promise;
    },
      function(response){
      //ohh promise is not fulfilled
       d.reject(response.data);
      //return promise
      return d.promise;
    });
  };//End of verify function

  //This is function to return list of countries
  this.getCountries=function(){
    var deferred=$q.defer();

    return $http.get('../Controllers/countries.json').then(function(success){
      deferred.resolve(success.data);
      return deferred.promise;
    },function(error){

    })
  }
}//end of callback function
