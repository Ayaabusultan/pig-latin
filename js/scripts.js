$("document").ready(function(){

    $("#Pig-latin").submit(function(event){

      event.preventDefault();
      $("#result").show();

      var input= $("#txt").val();
      var vowel =["a", "e", "i","o","u"];

      if (input){

        for(i=0; i<5; i++){
          if (input.startsWith(vowel[i])){
            $("#result").text(input+"way");
            break;
          }
        }  // for the for loop
        if(input.slice(0,2) === "qu"){
          $("#result").text((input.slice(2,input.length))+"qu");
        }
        else{

          var firstIndex = input.length + 1;

          for(i=0;i<5;i++){
            index = input.indexOf(vowel[i]);
            if ((index !== -1 ) && (index < firstIndex)){
              firstIndex= index;
            }//if
          } //for

          var slice1= input.slice(0,firstIndex);
          alert(slice1);
          var slice2 = input.slice(firstIndex,input.length);
          alert(slice2);
          $("#result").text(slice2+slice1+"ay");
         }
       } // if input






 }); //fot the submit


});
//for the ready
