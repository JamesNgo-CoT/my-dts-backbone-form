/* global FormBaseView FormTextFieldView */

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
      switch(config.type) {
        default:
        return FormTextFieldView;
      }
    }
  }],

  template: _.template(`{{> formrowview.tpl }}`)
});
