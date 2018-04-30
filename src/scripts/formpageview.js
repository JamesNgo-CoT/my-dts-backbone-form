/* global FormBaseView FormSectionView */

/* exported FormPageView */
const FormPageView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form-page',

  configAttributes: ['title'],

  domAttributes: [{
    attribute: 'id',
    domAttribute: 'id'
  }],

  subviewAttributes: [{
    attribute: 'sections',
    view: () => FormSectionView,
    selector: '.cot-form-sections'
  }],

  template: _.template(`{{> formpageview.tpl }}`)
});
