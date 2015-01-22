'use strict';

var Today = function(options) {
  this.options = options || {};
  this.data = options.data;
  this.now = new Date();
}

Today.prototype.list = function() {
  var list = this.options.id;
  for (var e = 0; e < this.data.length; e++) {
    buildDay(this.data[e], list);
  }

  function buildDay(day, id) {
    var list = document.getElementById(id),
        li = document.createElement('li'),
        d = new Date(day.date),
        n = new Date();
    li.innerHTML = day.note;
    li.className = 'day';
    if (d == n) {
      li.className += ' today';
    }
    list.appendChild(li);

  }
}

