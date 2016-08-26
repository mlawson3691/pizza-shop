# Pizza Shop

#### _A website to practice creating objects, August 19, 2016_

#### By _**Mark Lawson**_

## Description

This website has a form for users to customize and "submit" a pizza order. Users select a size and choose from a variety of toppings, the pizza is added to their cart, and then they submit the order. JavaScript objects and prototypes drive the business logic for the site. View the live site [here](https://mlawson3691.github.io/pizza-shop).

## Setup/Installation Requirements

* Clone the repo
* Open index.html in a browser

## Specifications

* Create a pizza object with properties: size, toppings.

* Calculate pizza cost based on its properties:
  * Larger pizzas cost more
    * Example input: "Sm" / "Lg"
    * Example output: $8 / $12

  * Additional toppings increase the price
    * Example input: "Sm pizza with pepperoni"
    * Example output: $9

* Selecting a radio button for size updates the current pizza's size property.
  * Example input: "Sm"
  * Example output: pizza.size = "Sm"

* Selecting a checkbox for a topping adds that topping to the pizza's topping property.
  * Example input: "pepperoni"
  * Example output: ["cheese", "pepperoni"]

* Submitting a form creates a new pizza object and displays the selected pizza options.
  * Example input: click "Submit"
  * Example output: "Md Pizza with cheese"


## Known Bugs

There are no known bugs at this time.

## Support and Contact Details

For questions or comments, please contact _mlawson3691@gmail.com_.

## Technologies Used

* _Javascript_
* _jQuery_
* _Bootstrap_

### License

*This website is licensed under the MIT license.*  
Copyright (c) 2016 **_Mark Lawson_**
