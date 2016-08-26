// BUSINESS LOGIC:
  function Order(pizzas, price) {
    this.pizzas = pizzas;
    this.price = price;
  }
  var allPizzas = [];
  var currentOrder = new Order(allPizzas, 0);

  function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  }

  Pizza.prototype.calculate = function() {
    var cost;
    if (this.size === "Sm") {
      cost = 8;
    } else if (this.size === "Md") {
      cost = 10;
    } else {
      cost = 12;
    }
    for (var i = 0; i < this.toppings.length; i++) {
      cost += 1;
    }
    currentOrder.price += cost;
    return cost;
  }

// USER INTERFACE LOGIC:
$(function() {
  $("#addPizza").click(function(event) {
    event.preventDefault();
    var currentSize = $("input:radio[name=size]:checked").val();
    var currentToppings = [];
    $(".topping:checked").each(function() {
      currentToppings.push($(this).val());
    });
    var newPizza = new Pizza(currentSize, currentToppings);
    var cost = newPizza.calculate();
    $("#pizzas").append(
      "<li>" +
        "<h4>" + newPizza.size + " Pizza - $" + cost + ".00</h4>" +
        "<ul class='toppingsDisplay'></ul>" +
      "</li>");
    for (var i = 0; i < newPizza.toppings.length; i++) {
      $(".toppingsDisplay:last").append("<li>" + newPizza.toppings[i] + "</li>");
    }
    $("#totalPrice").text(currentOrder.price);
  });

  $("#delivery").click(function() {
    $("#address").slideDown();
  });

  $("#pickUp").click(function() {
    $("#address").slideUp();
  });
});
