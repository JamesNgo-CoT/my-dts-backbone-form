/* global FormBaseView FormTextFieldView FormDropDownFieldView */

/* exported FormRowView */
const FormRowView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form-row row',

  domAttributes: [{
    attribute: 'id',
    domAttribute: 'id'
  }],

  subviewAttributes: [{
    attribute: 'fields',
    view: (config) => {
      switch(config.type.toUpperCase()) {
        case 'DROPDOWN':
        return FormDropDownFieldView;
        default:
        return FormTextFieldView;
      }
    }
  }],

  template: _.template(`{{> formrowview.tpl }}`)
});
