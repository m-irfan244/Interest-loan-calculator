
function compute()
{
    var principal = document.querySelector("#principal").value;
    var rate = document.querySelector("#rate").value;
    var years = document.querySelector("#years").value;

    var interest = principal * years * rate / 100;

    var year = new Date().getFUllYear() + parseInt(years);

    document.querySelector('#result').innerHTML = `If you deposit ${principal}, <br>at an interest rate of ${rate}. <br>You will receive an amount of ${interest}, <br>in the year ${year}`
    
}

function updateRate() {
    var rateval = document.querySelector("#rate").value;
    document.querySelector("#rate_val").innerHTML = rateval;
}
       
function validateAmount() {
  var principal = document.getElementById("principal").value;
  var moreThenZero = parseInt(principal) > 0;
  if (!moreThenZero) {
      alert("Enter a positive number please");
      document.getElementById("principal").focus();
  }
}