// BUSINESS LOGIC:

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
    $("#pizzas").append(
      "<li>" +
        "<h4>" + newPizza.size + " Pizza - $" + newPizza.calculate() + ".00</h4>" +
        "<ul class='toppingsDisplay'></ul>" +
      "</li>");
    for (var i = 0; i < newPizza.toppings.length; i++) {
      $(".toppingsDisplay:last").append("<li>" + newPizza.toppings[i] + "</li>");
    }

  });

  $("#delivery").click(function() {
    $("#address").slideDown();
  });

  $("#pickUp").click(function() {
    $("#address").slideUp();
  });
});
