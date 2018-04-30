/* global FormBaseView FormRowView */

/* exported FormSectionView */
const FormSectionView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form-section panel panel-default',

  configAttributes: ['title'],

  domAttributes: [{
    attribute: 'id',
    domAttribute: 'id'
  }],

  subviewAttributes: [{
    attribute: 'rows',
    view: () => FormRowView,
    selector: '.cot-form-rows'
  }],

  template: _.template(`{{> formsectionview.tpl }}`)
});
