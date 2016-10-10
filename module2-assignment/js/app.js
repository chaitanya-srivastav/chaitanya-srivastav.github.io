(function(){
'use strict';
angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;
  buy.toBuyList = ShoppingListCheckOffService.getToBuyItems();
  buy.moveToBought = function(index){
    ShoppingListCheckOffService.removeItemFromBuy(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.boughtList = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;

  var toBuyItems = [
    {name: "Cookies", quantity: 10},
    {name: "Chocolates", quantity: 2},
    {name: "Chips", quantity: 4},
    {name: "Milk", quantity: 5},
    {name: "Coke", quantity: 7}
  ];
  var boughtItems = [];

  service.getToBuyItems = function(){
    return toBuyItems;
  }

  service.getBoughtItems = function(){
    return boughtItems;
  }

  service.removeItemFromBuy = function(index){
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  }

}

})();
