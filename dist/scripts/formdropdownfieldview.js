'use strict';

/* global FormTextFieldView */

/* exported FormDropDownFieldView */
var FormDropDownFieldView = FormTextFieldView.extend({

  // PROPERTY DEFINITION

  configAttributes: function configAttributes() {
    return [].concat(FormTextFieldView.prototype.configAttributes, 'choices');
  },

  template: _.template('\n<div class="form-group">\n  <label\n    <% if (config.id) { %>\n    for="<%- config.id %>"\n    <% } %>\n  ><%- config.title %></label>\n  <% if (config.pre_help_text) { %>\n  <span class="help-block"><%- config.pre_help_text %></span>\n  <% } %>\n  <select\n    <% if (config.id) { %>\n    name="<%- config.id %>"\n    <% } %>\n    class="form-control"\n    <% if (config.id) { %>\n    id="<%- config.id %>"\n    <% } %>\n    <% if (config.pre_help_text || config.post_help_text) { %>\n    aria-describedby="<%- [config.pre_help_text, config.post_help_text].filter(function(value) { return value; }).join(\' \') %>"\n    <% } %>\n  >\n    <option value=""></option>\n    <% if (config.choices) { %>\n    <% for (var i = 0, l = config.choices.length; i < l; i++) { %>\n    <option value="<%- typeof config.choices[i] === \'string\' ? config.choices[i] : config.choices[i].value || config.choices[i].text %>">\n      <%- typeof config.choices[i] === \'string\' ? config.choices[i] : config.choices[i].text %>\n    </option>\n    <% } %>\n    <% } %>\n  </select>\n  <% if (config.post_help_text) { %>\n  <span class="help-block"><%- config.post_help_text %></span>\n  <% } %>\n</div>\n')
});