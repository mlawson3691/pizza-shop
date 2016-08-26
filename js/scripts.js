// BUSINESS LOGIC:
  function Order(name, pizzas, price) {
    this.name = name;
    this.pizzas = pizzas;
    this.price = price;
  }
  var allPizzas = [];
  var currentOrder = new Order("", allPizzas, 0);

  Order.prototype.subtract = function(num) {
    this.price -= num;
  }

  var pizzaCounter = 0;
  function Pizza(id, size, toppings) {
    this.id = pizzaCounter++;
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
    var newPizza = new Pizza(pizzaCounter, currentSize, currentToppings);
    var cost = newPizza.calculate();
    currentOrder.price += cost;
    currentOrder.pizzas.push(newPizza);
    $("#pizzas").append(
      "<li id='" + newPizza.id + "'>" +
        "<h4>" + newPizza.size + " Pizza - $<span>" + cost + "</span>.00<button type='button' class='btn remove'><span class='glyphicon glyphicon-trash'></span></button></h4>" +
        "<ul class='toppingsDisplay'></ul>" +
      "</li>");
    for (var i = 0; i < newPizza.toppings.length; i++) {
      $(".toppingsDisplay:last").append("<li>" + newPizza.toppings[i] + "</li>");
    }
    $(".totalPrice").text(currentOrder.price);

    $(".remove").last().click(function() {
      var thisCost = parseInt($(this).siblings("span").text());
      currentOrder.subtract(thisCost);
      $(".totalPrice").text(currentOrder.price);
      var pizzaID = $(this).parent().parent().attr("id");
      var thisPizza = currentOrder.pizzas.filter(function(pizza){return pizza.id == pizzaID})[0];
      var index = currentOrder.pizzas.indexOf(thisPizza);
      currentOrder.pizzas.splice(index,1);
      $(this).parent().parent().remove();
    });
  });

  var delivery = false;
  $("#delivery").click(function() {
    $("#address").slideDown();
    if (delivery === false) {
      currentOrder.price += 3;
      delivery = true;
    }
    $(".totalPrice").text(currentOrder.price);
    $("#delivOrPick").text("delivered");
  });

  $("#pickUp").click(function() {
    $("#address").slideUp();
    if (delivery === true) {
      currentOrder.price -= 3;
      delivery = false;
    }
    $(".totalPrice").text(currentOrder.price);
    $("#delivOrPick").text("ready for pick up");
  });

  $("#placeOrder").click(function(event) {
    event.preventDefault();
    $("#summaryList").empty();
    var toppings;
    currentOrder.name = $("#name").val();
    $("#nameFill").text(currentOrder.name);
    currentOrder.pizzas.forEach(function(pizza) {
      toppings = "";
      for (var i = 0; i < pizza.toppings.length; i++) {
        if (i < pizza.toppings.length-1) {
          toppings += pizza.toppings[i] + ", ";
        } else {
          toppings += "and " + pizza.toppings[i];
        }
      }
      $("#summaryList").append("<li>1 " + pizza.size + " Pizza with " + toppings + "</li>");
    });
  });
});
