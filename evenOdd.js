//FUNCTION CREATE FIR ENTER THE VALUE
function evenOdd(){
   
    
   //VARIABLE DECLARATION INITALLY SUM AND INPUTNUM ARE 0
    var num  =[];
    var Even =[];
    var Odd  =[];
    var sum  = 0;
    var evenSum =0;
    var oddSum =0;
    var inputnum=-1;

    //DO...WHILE LOOP TO PUSH THE VALUSE UNTILE USER ENTER -1
    do{   

         //LOCAL VARIABLE DECLARATION
         var inputnum;
           
         //TAKING INPUT VALUE'S FROM USER
         inputnum = parseInt(prompt("PLEASE ENTER -1 TO EXIT OR ENTER THE NEXT NUMBER TO CONTINUE : " ));

         //IF BLOCK TO CHECKS THE VALUE ENTERED BY THE USER IS -1 OR  NOT
         if (inputnum!=-1){
             num.push(inputnum);
             sum+=inputnum;

             //IF CONDITION TO CHECK SEPRATE THE EVEN AND ODD NUMBER'S
             if(inputnum % 2 == 0){
                Even.push(inputnum);
                evenSum +=inputnum;
             }else{
                 Odd.push(inputnum);
                 oddSum +=inputnum;
             }
         }

          
     //LOOP CONTINUSE TILL THE ENTERED VALUE BECOME -1
    }while(inputnum != -1);

    //Making the display none
    document.getElementById("btnEvenOdd").style.display= "none";

    //Making the display on
    document.getElementById("restart").style.display = "block";
     /*document.getElementById("Total").innerHTML = "NUMBER'S ENTERED BY THE USER : <br>" + num;
     document.getElementById("TotalSum").innerHTML= `Total = ${sum}`;
     document.getElementById("even").innerHTML = "EVEN NUMBER'S LIST : <br>" + Even;
     document.getElementById("Evenresult").innerHTML =` EVEN NUMBER'S SUM = ${evenSum}`;
     document.getElementById("odd").innerHTML = "ODD NUMBER'S LIST : <br>" + Odd;
     document.getElementById("Oddresult").innerHTML =`ODD NUMBER'S SUM = ${oddSum}`;*/

    //FOR OUTPUT
    var a = document.getElementById("CalTable").rows[1].cells;
        a[1].innerHTML = num;
    var b =  document.getElementById("CalTable").rows[1].cells ;
        b[2].innerHTML =`${sum}`;
    var c =  document.getElementById("CalTable").rows[2].cells ;
        c[1].innerHTML = Even;
    var d =  document.getElementById("CalTable").rows[2].cells ;
        d[2].innerHTML =`${evenSum}`;
    var e =  document.getElementById("CalTable").rows[3].cells ;
        e[1].innerHTML = Odd;
    var f =  document.getElementById("CalTable").rows[3].cells ;
        f[2].innerHTML =`${oddSum}`;
    
}


