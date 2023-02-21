//barcode Controller
var id;
var data;
barcodeApp.controller("barCodeCtrl",['$scope','$firebaseArray','$stateParams',"$window",function($scope,$firebaseArray,$stateParams,$window){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

          const generateBtn = document.querySelector(".generateBtn");
          const content2 = document.querySelector(".content2");
          const content3 = document.querySelector(".content3");
          const uuidTextBox = document.querySelector(".uuidTextBox");
          const progress = document.querySelector("progress")
          const width = document.querySelector(".input-width")
          const height = document.querySelector(".input-height")
          const img = document.querySelector('img');
          let myUrl;
          generateBtn.addEventListener("click",(e)=>{ 
          try{
          $scope.user={};
          e.preventDefault();  
          id = crypto.randomUUID();
          $scope.id =id;
          console.log(id);
          myUrl="https://karthikn45.github.io/BarcodeApp/"+id;
          content2.style.display="block";
          document.getElementById('qrcode').innerHTML="";
          qrCodeGenerater(); 
          }catch(err){
              console.error();
          }                   
        }); 
      
        let url = "";
        let count = 1;
        let input = document.querySelectorAll("input");
        
      
        document.onkeydown = (e) =>{
          try{
            if(myUrl.includes(e.key)&&!(input[0]===document.activeElement) && !(input[1]===document.activeElement) && !(input[2]===document.activeElement)){
              url += e.key;
              if(url.length >= 78 && url.length <= 78 && url.startsWith("http://")){
                $window.location.href = url+"/"+($window.location.href=="https://karthikn45.github.io/BarcodeApp/"); 
              }
            }
  
          }
          catch(err){
            console.log(err.message)
          }
        }

      $scope.barcodeInfo = function(){ 
        document.getElementById('qrcode').innerHTML="";
        var ref = firebase.database().ref("users");
        $scope.user.date= new Date().toString();
        ref.child(id).set([$scope.user]);
        content3.style.display="block";
        qrCodeGenerater();
      }
      function qrCodeGenerater(){
        try{
        var qrcode= new QRCode(document.querySelector("#qrcode"), {
          text: "https://karthikn45.github.io/BarcodeApp/"+id + "/"+ false,
          width: 150, 
          height: 150,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
      
      }); 
      }catch(err){
      console.log(err.message)
      }
      }
                   
      $scope.printToCart = function(qrcode) {
        try{
        var innerContents = document.getElementById('qrcode').innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
        
      }catch(err){
        console.log(err.message)
      }
    }
}]);
