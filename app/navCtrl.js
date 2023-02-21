// navCtrl
barcodeApp.controller("navCtrl",["$scope", "$state", function($scope, $state){
    $scope.goNext = function(hash) { 
     $state.go(hash);
    };
}]);