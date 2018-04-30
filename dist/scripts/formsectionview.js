'use strict';

/* global FormBaseView FormRowView */

/* exported FormSectionView */
var FormSectionView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form-section panel panel-default',

  configAttributes: ['title'],

  domAttributes: [{
    attribute: 'id',
    domAttribute: 'id'
  }],

  subviewAttributes: [{
    attribute: 'rows',
    view: function view() {
      return FormRowView;
    },
    selector: '.cot-form-rows'
  }],

  template: _.template('\n<div class="panel-heading"><%- config.title %></div>\n\n<div class="cot-form-rows panel-body"></div>\n')
});