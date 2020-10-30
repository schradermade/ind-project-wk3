$(document).ready(function()  {
  $("form#mrForm").submit(function(event) {
    event.preventDefault();

    let userNum = parseInt($("#inputBox").val());
    let numArray = [];
    let finalArray = [];

    for (let i = 0; i <= userNum; i+=1)  {
      numArray.push(i);
    }

    finalArray = numArray.map(function(element)  {
      if (element === 0)  {
        return element;
      }
      else if (element === 1) {
        return "Beep!";
      }
      else if (element === 2) {
        return "Boop!";
      }
      else if (element === 3) {
        return "Won't you be my neighbor?";
      }
      else  {
        return element;
      }
    });
    
    console.log(numArray);
    console.log(finalArray);

  });
});





/*
      if (element === 0)  {
        element = 5;
      }
      else {
      finalArray[element] = element;
      }
      

        else if (element === 1) {
          numArray.push("Beep!")
        }



for (let i = 0; i <= userNum; i+=1)  {
  numArray.push(i);
};
*/