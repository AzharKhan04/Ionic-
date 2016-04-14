//this is service to get all countries from json
angular.module('shopApp').service('countriesService',countriesService);
function countriesService($http){
  this.getCountries=function () {
    $http.get('Controllers/countries.json').then(function(data){
      var countries=data;
    }).error(function(err){

    })
    return countries;

  }
}

