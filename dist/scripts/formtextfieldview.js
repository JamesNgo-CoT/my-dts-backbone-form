'use strict';

/* global FormBaseView */

/* exported FormTextFieldView */
var FormTextFieldView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form-field col-xs-12',

  configAttributes: ['id', 'pre_help_text', 'title', 'post_help_text'],

  domAttributes: [{
    attribute: 'wrapperId',
    domAttribute: 'id'
  }],

  template: _.template('\n<div class="form-group">\n  <label\n    <% if (config.id) { %>\n    for="<%- config.id %>"\n    <% } %>\n  ><%- config.title %></label>\n  <% if (config.pre_help_text) { %>\n  <span class="help-block"><%- config.pre_help_text %></span>\n  <% } %>\n  <input\n    <% if (config.id) { %>\n    name="<%- config.id %>"\n    <% } %>\n    type="text"\n    class="form-control"\n    <% if (config.id) { %>\n    id="<%- config.id %>"\n    <% } %>\n    <% if (config.pre_help_text || config.post_help_text) { %>\n    aria-describedby="<%- [config.pre_help_text, config.post_help_text].filter(function(value) { return value; }).join(\' \') %>"\n    <% } %>\n  >\n  <% if (config.post_help_text) { %>\n  <span class="help-block"><%- config.post_help_text %></span>\n  <% } %>\n</div>\n'),

  // METHOD DEFINITION

  render: function render() {
    var _this = this;

    FormBaseView.prototype.render.call(this);

    var id = _.result(this, 'id');
    if (id) {
      var $input = this.$el.find('input');

      this.listenTo(this.model, 'change:' + id, function () {
        $input.val(_this.model.get(id));
      });

      $input.on('change', function () {
        _this.model.set(id, $input.val());
      });

      if (this.model.has(id)) {
        this.model.trigger('change:' + id);
      }
    }
  },


  // INITIALIZER DEFINITION

  initialize: function initialize(options) {
    if (!_.result(this, 'wrapperId') && _.result(this, 'id')) {
      this.wrapperId = _.result(this, 'id') + 'Element';

      console.log('WRAPPER ID', this.wrapperId);
    }

    FormBaseView.prototype.initialize.call(this, options);
  }
});