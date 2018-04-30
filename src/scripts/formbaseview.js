/* exported FormBaseView */
const FormBaseView = Backbone.View.extend({

  // PROPERTY DEFINITION

  template: () => {},

  // METHOD DEFINITION

  remove: function() {

    // REMOVE SUBVIEWS
    for (let i = 0, l = this.subViews.length; i < l; i++) {
      this.subViews[i].remove();
    }

    Backbone.View.prototype.remove.call(this);
  },

  render: function() {

    // REMOVE SUBVIEWS
    for (let i = 0, l = this.subViews.length; i < l; i++) {
      this.subViews[i].remove();
    }

    // RENDER FROM TEMPLATE
    const config = {};
    const configAttributes = _.result(this, 'configAttributes', []);
    for (let i = 0, l = configAttributes.length; i < l; i++) {
      config[configAttributes[i]] = this[configAttributes[i]];
    }
    this.$el.html(this.template({
      config: config,
      model: this.model.toJSON()
    }));

    // ADD SUBVIEWS
    const subviewAttributes = _.result(this, 'subviewAttributes', []);
    for (let i1 = 0, l1 = subviewAttributes.length; i1 < l1; i1++) {
      const subviewAttribute = _.result(subviewAttributes[i1], 'attribute');
      const subviewSelector = _.result(subviewAttributes[i1], 'selector');
      const $subviewSelector = subviewSelector ? $(subviewSelector, this.$el) : this.$el;

      let subviewConfigs = this[subviewAttribute];
      if (subviewConfigs) {
        if (!Array.isArray(subviewConfigs)) {
          subviewConfigs = [subviewConfigs];
        }

        for (let i2 = 0, l2 = subviewConfigs.length; i2 < l2; i2++) {
          const ViewClass = subviewAttributes[i1].view.prototype instanceof Backbone.View
            ? subviewAttributes[i1].view : subviewAttributes[i1].view(subviewConfigs[i2]);
          const view = new (ViewClass.extend(subviewConfigs[i2]))({
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

  initialize: function(options) {
    this.subViews = [];

    const domAttributes = _.result(this, 'domAttributes', []);
    for (let i = 0, l = domAttributes.length; i < l; i++) {
      const attribute = typeof domAttributes[i] === 'string'
        ? domAttributes[i] : _.result(domAttributes[i], 'attribute');
      const domAttribute = typeof domAttributes[i] === 'string'
        ? domAttributes[i] : _.result(domAttributes[i], 'domAttribute', attribute);
      if (attribute && this[attribute] && domAttribute) {
        this.$el.attr(domAttribute, this[attribute]);
      }
    }
  }
});
