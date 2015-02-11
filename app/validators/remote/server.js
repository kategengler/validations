import Base from 'ember-validations/validators/base';
import EmberValidations from 'ember-validations';

var Validator = Base.extend({
  init: function() {
    this._super();
    return this.dependentValidationKeys.pushObject("model.errors." + this.property);
  },

  call: function() {
    var errors, value, _i, _len, _results;
    errors = this.model.get("model.errors." + this.property);
    if (errors == null) {
      return;
    }

    if (errors.get('length') === 0) {
      return;
    }

    for (_i = 0, _len = errors.length; _i < _len; _i++) {
      value = errors[_i];
      this.errors.pushObject(value.message);
    }
  }
});

export default Validator;
