'use strict';

/* global FormBaseView FormSectionView */

/* exported FormPageView */
var FormPageView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form-page',

  configAttributes: ['title'],

  domAttributes: [{
    attribute: 'id',
    domAttribute: 'id'
  }],

  subviewAttributes: [{
    attribute: 'sections',
    view: function view() {
      return FormSectionView;
    },
    selector: '.cot-form-sections'
  }],

  template: _.template('\n<h3><%- config.title %></h3>\n\n<div class="cot-form-sections"></div>\n')
});