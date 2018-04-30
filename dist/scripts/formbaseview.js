'use strict';

/* exported FormBaseView */
var FormBaseView = Backbone.View.extend({

  // PROPERTY DEFINITION

  template: function template() {},

  // METHOD DEFINITION

  remove: function remove() {

    // REMOVE SUBVIEWS
    for (var i = 0, l = this.subViews.length; i < l; i++) {
      this.subViews[i].remove();
    }

    Backbone.View.prototype.remove.call(this);
  },

  render: function render() {

    // REMOVE SUBVIEWS
    for (var i = 0, l = this.subViews.length; i < l; i++) {
      this.subViews[i].remove();
    }

    // RENDER FROM TEMPLATE
    var config = {};
    var configAttributes = _.result(this, 'configAttributes', []);
    for (var _i = 0, _l = configAttributes.length; _i < _l; _i++) {
      config[configAttributes[_i]] = this[configAttributes[_i]];
    }
    this.$el.html(this.template({
      config: config,
      model: this.model.toJSON()
    }));

    // ADD SUBVIEWS
    var subviewAttributes = _.result(this, 'subviewAttributes', []);
    for (var i1 = 0, l1 = subviewAttributes.length; i1 < l1; i1++) {
      var subviewAttribute = _.result(subviewAttributes[i1], 'attribute');
      var subviewSelector = _.result(subviewAttributes[i1], 'selector');
      var $subviewSelector = subviewSelector ? $(subviewSelector, this.$el) : this.$el;

      var subviewConfigs = this[subviewAttribute];
      if (subviewConfigs) {
        if (!Array.isArray(subviewConfigs)) {
          subviewConfigs = [subviewConfigs];
        }

        for (var i2 = 0, l2 = subviewConfigs.length; i2 < l2; i2++) {
          var ViewClass = subviewAttributes[i1].view.prototype instanceof Backbone.View ? subviewAttributes[i1].view : subviewAttributes[i1].view(subviewConfigs[i2]);
          var view = new (ViewClass.extend(subviewConfigs[i2]))({
            model: this.model
          });
          view.$el.appendTo($subviewSelector);
          view.render();
          this.subViews.push(view);
        }
      }
    }
  },

  // INITIALIZER DEFINITION

  initialize: function initialize(options) {
    this.subViews = [];

    var attributes = _.result(this, 'attributes', {});
    var domAttributes = _.result(this, 'domAttributes', []);
    for (var i = 0, l = domAttributes.length; i < l; i++) {
      var attribute = typeof domAttributes[i] === 'string' ? domAttributes[i] : _.result(domAttributes[i], 'attribute');
      var domAttribute = typeof domAttributes[i] === 'string' ? domAttributes[i] : _.result(domAttributes[i], 'domAttribute', attribute);
      attributes[(domAttribute, this[attribute])];
    }
    this.attributes = attributes;
  }
});