'use strict';
window.App = window.App || {};

/*
**
**  constructor
**
*/
var TodayConstructor = function(options) {
  // build scope level paramaters
  this.options = this.options || {};
}

TodayConstructor.prototype.date = {
  today: function() {
    return new Date();
  }
}