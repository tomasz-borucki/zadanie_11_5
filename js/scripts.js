var btn1 = new Button('Hello!');

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype.create = function() {
  var self = this;
  this.$element = $('<button>');
  this.$element.text(this.text);
  this.$element.click(function() {
    alert(self.text);
  });
  $('body').append(this.$element); 
};

btn1.create();