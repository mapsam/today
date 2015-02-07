'use strict';

var Today = function(options) {
  this.options = options || {};
  this.data = options.data;
  this.now = new Date();
}

Today.prototype.list = function() {
  var list = document.getElementById(this.options.id);
  for (var e = 0; e < this.data.length; e++) {
    var date = new Date(this.data[e].date);
    if (date < this.now) list.appendChild(buildDay(this.data[e]));
  }

  function buildDay(day) {
    var li = document.createElement('li'),
        d = new Date(day.date),
        n = new Date();
    li.innerHTML = day.note;
    li.className = 'day';
    return li;
  }
}

