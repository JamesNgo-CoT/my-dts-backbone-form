/* global FormBaseView FormPageView FormSectionView */

/* exported FormView */
const FormView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form',

  configAttributes: ['title'],

  domAttributes: [{
    attribute: 'id',
    domAttribute: 'id'
  }],

  subviewAttributes: [{
    attribute: 'pages',
    view: () => FormPageView,
    selector: '.cot-form-pages'
  }, {
    attribute: 'sections',
    view: () => FormSectionView,
    selector: '.cot-form-sections'
  }],

  tagName: 'form',

  template: _.template(`{{> formview.tpl }}`)
});
