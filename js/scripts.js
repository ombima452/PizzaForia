function Details(type, size, crust, toppings, quantity){
    this.selectedType = type;
    this.selectedSize = size;
    this.selectedCrust = crust;
    this.selectedToppings = toppings;
    this.selectedQuantity = quantity;
  }
  
  function Total(price, quantity, delivery){
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
  }
  
  Total.prototype.finalTotal = function(){
    return this.price * this.quantity + this.delivery;
  }
  
  
  $(document).ready(function(){
    $('#myOrder').submit(function(event){
      event.preventDefault();
  
      var selectedDeliver = parseInt($('#delivery-option').val());
      var deliverPrices = [200, 0]
      var sizePrices = [1200, 900, 600];
      var inputtedType = $('#type').val();
      var inputtedCrust = $('#crust').val();
      var inputtedTopping = $('#toppings').val();
      var inputtedSize = parseInt($('#size').val());
      var pizzaPrice = sizePrices[inputtedSize-1];
      var inputtedQuantity = parseInt($('#quantity').val());
      var deliveryPrice = deliverPrices[selectedDeliver-1];
  
      var newDetails = new Details(inputtedType, inputtedSize, inputtedCrust, inputtedTopping, inputtedQuantity);
      var newTotal = new Total(pizzaPrice, inputtedQuantity, deliveryPrice);
      var newBill = newTotal.finalTotal();
  
  
      alert("You've ordered " + newDetails.selectedType + ' with '+ newDetails.selectedToppings + ', and a ' + newDetails.selectedCrust +" crust. Click ok to view your bill");
      alert(' Your total bill is Ksh/='+newBill );
      alert('Thank you for using our services');
  
      document.getElementById('myOrder').reset();
  
    });
  
  });


  