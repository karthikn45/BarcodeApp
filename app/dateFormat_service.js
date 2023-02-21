barcodeApp.service("dateFormat", function(){
   
    this.formatToTime = (time)=>{
       try{
       let hr = parseInt(time.substring(0,2))>12 ?parseInt(time.substring(0,2)) -12 : parseInt(time.substring(0,2));
       let hour = hr>9 ? hr: "0"+hr;
       let ap = parseInt(time.substring(0,2)) >= 12 ? "PM":"AM"
       let miniute = time.substring(3,5);
       return `${hour}:${miniute} ${ap}`
    }
    catch(err){
     console.log(err.message)
    }
   }
 })
 