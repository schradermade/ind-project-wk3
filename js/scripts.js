$(document).ready(function()  {
  $("form#mrForm").submit(function(event) {
    event.preventDefault();

    let userNum = parseInt($("#inputBox").val());
    let userNum2 = userNum;
    let numArray = [];

    for (let i = 0; i <= userNum; i+=1)  {
      numArray.push(i);
    };
    
    console.log(userNum);
    console.log(numArray);

  });
});