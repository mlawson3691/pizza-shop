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
