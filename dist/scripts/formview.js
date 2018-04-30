'use strict';

/* global FormBaseView FormPageView FormSectionView */

/* exported FormView */
var FormView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form',

  configAttributes: ['title'],

  domAttributes: [{
    attribute: 'id',
    domAttribute: 'id'
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

  template: _.template('\n<h2><%- config.title %></h2>\n\n<div class="row">\n  <div class="col-xs-12">\n    <button type="button" class="btn btn-default">Submit</button>\n  </div>\n</div>\n\n<div class="cot-form-pages"></div>\n\n<div class="cot-form-sections"></div>\n')
});