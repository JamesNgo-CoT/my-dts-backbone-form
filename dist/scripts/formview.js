'use strict';

/* global FormBaseView FormPageView FormSectionView */

/* exported FormView */
var FormView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form',

  configAttributes: ['title'],

  domAttributes: [{
    attribute: 'title',
    domAttribute: 'title'
  }],

  subviewAttributes: [{
    attribute: 'pages',
    view: function view() {
      return FormPageView;
    },
    selector: '.cot-form-pages'
  }, {
    attribute: 'sections',
    view: function view() {
      return FormSectionView;
    },
    selector: '.cot-form-sections'
  }],

  tagName: 'form',

  template: _.template('\n<% if (config.title) { %>\n<h2><%- config.title %></h2>\n<% } %>\n\n<p><button type="button" class="btn btn-default">Submit</button></p>\n\n<div class="cot-form-pages"></div>\n\n<div class="cot-form-sections"></div>\n')
});