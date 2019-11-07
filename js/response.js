'use strict'
var answer ;
var response ;
var baka ;
var animeNumber=0;
var medals= '';


 while (answer !== 'yes' && answer !== 'no' ){
 answer = prompt("Do You Watch Anime ( Yes or No )")
 }
 
function responseImge(){    
    if (answer === 'yes' ){
        response = "You Will Love This Site!"
    } else if (answer === 'no'){
        response = "If You Dont Watch it, What are doing Here ??"  
    } else {
        response = "Reload the Page And Try Again"
    }
    return response ;
    
} responseImge();

if(answer === 'yes'){

     animeNumber= prompt("how many did you watch? ")

     for(var i =0; i < animeNumber ; i= i + 1 ){
         console.log('ansbasb',animeNumber)
         medals = medals+'<img src="https://cdn0.iconfinder.com/data/icons/rewards-icons/110/Medal-2-128.png" />';
       
    } 
    document.write(medals);
}



// if (answer == 1 ){
//     response = "You Will Love This Site!"  
// } else {
//     response = "If You Dont Watch it, What are doing Here ??"   
// }

// document.write('<h2>' +response+ '<h2>');
