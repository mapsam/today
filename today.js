'use strict';

var Today = function(options) {
  this.options = options || {};
  this.initHandlers();
  this.data = options.data;
  this.now = new Date();
}

Today.prototype.initHandlers = function() {
  document.getElementById('days').onclick = this.handlers.nav.click;
}

Today.prototype.handlers = {
  nav: {
    click: function() {
      console.log('waka');
    },
    submit: function() {
      return this.click();
    }
  }
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

