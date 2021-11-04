// Temp data
let data = {
    "bgt": "Begitu, means Its like that",
    "ywd" :"Ya sudah, means finished",
    "gmw": "Gak mau, means I don't want it",
    "gbs": "Gak bisa, means, Cannot happen",
    "sy": "Saya, means I",
    "km": "Kamu, means You",
    "lg": "Lagi, means More, or Now",
    // Lagi... means, xyz 'in any local language;

};

$(document).ready(() => {
    $("#slang-answer").html("Input a text from Bahasa Indonesia");
    // Call translateSlang when input is updated.
    $("#slanginput").on("change keyup paste", function(){
        translateSlang();
    })
    
    let translateSlang = () => {
        let userInput = $("#slanginput").val();
        if(userInput in data){
            $("#slang-answer").html(data[userInput]);
        } else {
            $("#slang-answer").html("No answers found :(");
        }
    }    

});


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
