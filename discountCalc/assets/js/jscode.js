function getPrice() {

  var P = Number(document.getElementById("price").value);
  var D =  Number(document.getElementById("discount").value) / 100;

  if((P && D) == ''){
    alert("Please insert number for price and discount percentage first");
  }
  else{
    alert("Calculation success!");

    var totalValue = P - (P * D)
    document.getElementById("total").value = totalValue.toFixed(2);

  }

}
