$(document).ready(function()  {
  $("form#mrForm").submit(function(event) {
    event.preventDefault();

    let userNum = parseInt($("#inputBox").val());
    let userArray = [];
    let finalString = [];
    let userString = "";

    for (let i = 0; i <= userNum; i+=1)  {
      userArray.push(i);
    }

    userString = userArray.map(function(e){return e.toString()});

    finalString = userString.map(function(element)  {
      if (element === "0")  {
        return element;
      }
      else if (element.includes("3")) {
        return "Won't you be my neighbor?";
      }
      else if (element.includes("2")) {
        return "Boop!";
      }
      else if (element.includes("1")) {
        return "Beep!";
      }
      else  {
        return element;
      }
    });
    finalString;
  });
});



/*
// working script to replace "1" "2" and "3" //

$(document).ready(function()  {
  $("form#mrForm").submit(function(event) {
    event.preventDefault();

    let userNum = parseInt($("#inputBox").val());
    let userArray = [];
    let finalString = [];

    for (let i = 0; i <= userNum; i+=1)  {
      userArray.push(i);
    }

    finalString = userArray.map(function(element)  {
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
    
    console.log(userArray);
    console.log(finalString);

  });
});

*/


/*
$(document).ready(function()  {
  $("form#mrForm").submit(function(event) {
    event.preventDefault();

    let userNum = parseInt($("#inputBox").val());
    let userArray = [];
    let finalString = userArray.split("");
    let newArray = [];

    for (let i = 0; i <= userNum; i+=1)  {
      userArray.push(i);
    };

    let userString = userArray.map(function(e){return e.toString()});
    

    finalString.forEach(function(number) {
      if (userArray.includes(number)) [
        newArray.push("")
      ]
    })

    


    finalString = userArray.map(function(element)  {
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
    
    alert("user Array");
    console.log(userArray);
    alert("final array")
    console.log(finalString);
    alert("new array");
    console.log(newArray)

  });
});

*/

/*
alert("user Array")
console.log(userArray);
alert("user String")
console.log(userString);
alert("final string")
console.log(finalString);
*/