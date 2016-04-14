// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('shopApp', ['ionic','ui.router','satellizer','ngCordova'])
  .config(function ($stateProvider,$urlRouterProvider,$httpProvider,$authProvider) {

    $httpProvider.defaults.useXDomain=true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.withCredentials = false;

    $authProvider.loginUrl='http://54.86.64.100:3000/api/v1/auth/user';//login url for auth's login function

    $urlRouterProvider.otherwise('/home');//By default it will show login Page
    //Differents states Configuratuin defined below
    //This is login screen State
    $stateProvider.state('login',{
      url:'/login',
      controller:'loginController',
      templateUrl:'templates/login.html'
    })
      //this state for Signup form
      .state('register',{
        url:'/register',
        templateUrl:'templates/verifyNumber.html',
        controller:'verifyCtrl'
      })
    //This is home state
      .state('home',{
       url:'/home',
      templateUrl:'templates/home.html'
    })
    //this is profile info state
      .state('profileInfo',{
        url:'/profileInfo',
        templateUrl:'templates/profileInfo.html',
        controller:'profileInfoCtrl'
      });
  })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});
