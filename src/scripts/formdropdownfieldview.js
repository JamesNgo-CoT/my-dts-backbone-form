/* global FormTextFieldView */

/* exported FormDropDownFieldView */
const FormDropDownFieldView = FormTextFieldView.extend({

  // PROPERTY DEFINITION

  configAttributes: () => [].concat(FormTextFieldView.prototype.configAttributes, 'choices'),

  template: _.template(`{{> formdropdownfieldview.tpl }}`)
});
