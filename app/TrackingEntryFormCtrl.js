// trackingEntryCtrl
barcodeApp.controller("trackingEntryCtrl",["$scope", "$state","$firebaseArray","$stateParams","dateFormat",function($scope,$state,$firebaseArray,$stateParams,dateFormat){
    const submit = document.querySelector(".submit");
    let addFormBtn = document.querySelector(".addFormBtn");
    let trackingForm = document.querySelector(".trackingForm");
    $scope.addEntryForm = function(){
      try{
      trackingForm.style.display = "block";
      }catch(err){
        console.log(err.message);
      }
    };
    $scope.formHide = function(){
      try{
      trackingForm.style.display = "none";
      }catch(err){
        console.log(err.message)
      }
    };
    $scope.time = (time)=>{
      try{
      return dateFormat.formatToTime(time);
      }catch(err){
        console.log(err.message)
      }
    };
     
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    });
  
      var ref = firebase.database().ref("users");
      $scope.id = $stateParams.id;
      $scope.edit = $stateParams.edit == 'true';
      $scope.userdata=$firebaseArray(ref);
     
      $scope.userdata.$loaded()
      .then(function(){
        try{     
          $scope.datas = $scope.userdata;    
          console.log($scope.datas.length)
          $scope.trackingInfo =function(){
           
          for(let i=0; i< $scope.datas.length;i++){
            console.log($scope.datas[i][0]);
            if($scope.id == $scope.datas[i]['$id']){
              var length = $scope.datas[i].length;
              ref.child($scope.id).child(length).set({remark:$scope.remarks, status:$scope.status, location:$scope.location, date : new Date().toString()});
              trackingForm.style.display = "none";         
            }
          } 
        }
      }catch(err){
        console.log(err.message)
      }
      });
  ///////////////////
  
    $firebaseArray(ref).$loaded().then(
      (response)=>{
        try{
         $scope.data = response;
          for(let i=0;i<$scope.data.length;i++){
            console.log($scope.data.length)
            if($scope.data [i]['$id'].includes( $scope.id)){
                  console.log($scope.data[i]);
                  $scope.info = $scope.data[i];
                  console.log($scope.info);    
            }
          }
        }catch(err){
          console.log(err.message)
        }
      },
      (e)=>{
        console.log(e)
      });    
  }]);
  