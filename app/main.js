var barcodeApp = angular.module("barcodeApp", ["ui.router","firebase"]);

barcodeApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider 
  .state("home", {
    url: "/",
    templateUrl : "../view/generatebarcode.html",
    controller : "barCodeCtrl"
  })

  .state("trackingEntryForm", {
    url: "/trackingEntryForm/:id/:edit",
    templateUrl : "../view/trackingEntryForm.html",
    controller : "trackingEntryCtrl"
  })

  $urlRouterProvider.otherwise("/");
});










