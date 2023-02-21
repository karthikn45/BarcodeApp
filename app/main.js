var barcodeApp = angular.module("barcodeApp", ["ui.router","firebase"]);

barcodeApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider 
  .state("home", {
    url: "/",
    templateUrl : "https://github.com/karthikn45/BarcodeApp/blob/view/generatebarcode.html",
    controller : "barCodeCtrl"
  })

  .state("trackingEntryForm", {
    url: "/trackingEntryForm/:id/:edit",
    templateUrl : "https://github.com/karthikn45/BarcodeApp/blob/view/trackingEntryForm.html",
    controller : "trackingEntryCtrl"
  })

  $urlRouterProvider.otherwise("/");
});










