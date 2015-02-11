import Base from 'ember-validations/validators/base';
import EmberValidations from 'ember-validations';

var Validator = Base.extend({
  init: function() {
    this._super();

    if (this.options === true) {
      this.set('options', {});
    }

    if (this.options.message === void 0) {
      return this.set('options.message', EmberValidations.messages.render('custom', this.options));
    }
  },

  call: function() {
    if (this.model.get(this.options.property) !== true) {
      if (typeof this.options.message === 'function') {
        return this.errors.pushObject(this.options.message(this.model));
      } else {
        return this.errors.pushObject(this.options.message);
      }
    }
  }
});

export default Validator;
