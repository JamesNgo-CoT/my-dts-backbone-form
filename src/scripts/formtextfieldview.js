/* global FormBaseView */

/* exported FormTextFieldView */
const FormTextFieldView = FormBaseView.extend({

  // PROPERTY DEFINITION

  className: 'cot-form-field col-xs-12',

  configAttributes: ['id', 'pre_help_text', 'title', 'post_help_text'],

  template: _.template(`{{> formtextfieldview.tpl }}`),

  // METHOD DEFINITION

  render() {
    FormBaseView.prototype.render.call(this);

    const id = _.result(this, 'id');
    if (id) {
      const $input = this.$el.find('input');

      this.listenTo(this.model, 'change:' + id, () => {
        $input.val(this.model.get(id));
      });

      $input.on('change', () => {
        this.model.set(id, $input.val());
      });

      if (this.model.has(id)) {
        this.model.trigger('change:' + id);
      }
    }
  }
});
