# CostPers
CostPers is an app that helps you understand the value of your things. The app keeps track of how much you paid for an item and how many times you've used it - then it calculates the item's real-time "cost per use."

Watch this short demo video to see the CostPers app in action:

[![alt text](https://raw.githubusercontent.com/icedcoffeeallday/CostPers/master/CostPers_on_YouTube.png)](https://www.youtube.com/watch?v=fcuIzBc5JEg&feature=youtu.be)


## Team Members
Costpers was created as a final project at Dev Bootcamp, San Francisco. Team members include:

Ginny Fahs ([@ginnyfahs](http://github.com/ginnyfahs))

Andrea Scott ([@icedcoffeeallday](http://github.com/icedcoffeeallday))

Faye Hayes ([@fhayes301](http://github.com/fhayes301))

Kevin Cai ([@kevincai79](http://github.com/kevincai79))

Tyler Kawabata ([@tylerk64](http://github.com/tylerk64))

## MVP Functionality

CostPers is an iOS and Android app built on a decoupled architecture featuring:
 * Rails API backend
 * React Native frontend

*Rails API backend features*
* User authentication with BCrypt
* Calculates CostPers
* Controls item sorting and starred/un-starred item lists
* Parses and passes JSON to the frontend

*React Native frontend features*
* Allows users to create and store items, as well as each item's uses, passing data to and from the backend via Axios
* Displays CostPer reduction in real-time when user logs a use of an item
* Routing and state management handled with React Native Router Flux

## Flow
* Log in to see a list of all items, with starred items at the top
* Use Add Item footer button to add an item
* Log a use of any item by tapping the gray checkmark, and see the cost-per-use go down in real time
* Tap on an item to view its price and total uses
* Favorite or un-favorite an item

## Future Features
* Track the cost per use of monthly subscriptions
* Add photos of items
* Categorize items and see analytics
* Log past uses of an item
* Emoji support :heart:
