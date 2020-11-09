// Business Logic
let userArray = [];
let userString = "";
let finalString = [];

function roboger(userNum) {
  for (let i = 0; i <= userNum; i+=1)  {
    userArray.push(i);
  }

  userString = userArray.map(function(e){return e.toString()});
  console.log(userString);
  finalString = userString.map(function(element)  {
    if (element === "0")  {
      return element;
    }
    else if (element.includes("3")) {
      return " \"Won't you be my neighbor?\"";
    }
    else if (element.includes("2")) {
      return " \"Boop!\"";
    }
    else if (element.includes("1")) {
      return " \"Beep!\"";
    }
    else  {
      return " " + element;
    }
  return finalString;
  });
} 
// User Interface Logic
$(document).ready(function()  {
  $("form#mrForm").submit(function(event) {
    event.preventDefault();

    let userNum = parseInt($("#inputBox").val());
 
    roboger(userNum);
    document.getElementById("showString").innerHTML = finalString;
    
  });
});