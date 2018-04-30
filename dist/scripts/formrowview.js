'use strict';

/* global FormBaseView FormTextFieldView FormDropDownFieldView */

/* exported FormRowView */
var FormRowView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form-row row',

  domAttributes: [{
    attribute: 'id',
    domAttribute: 'id'
  }],

  subviewAttributes: [{
    attribute: 'fields',
    view: function view(config) {
      switch (config.type.toUpperCase()) {
        case 'DROPDOWN':
          return FormDropDownFieldView;
        default:
          return FormTextFieldView;
      }
    }
  }],

  template: _.template('')
});