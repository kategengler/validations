import Ember from 'ember';

export default Ember.Mixin.create({
  _submitted: false,
  submitted: function(key, value) {
    if (arguments.length > 1) {
      this.set("_submitted", value);
      (this.get("childCollection") || []).forEach(function(child) {
        return child.set("submitted", value);
      });
    }
    return this.get("_submitted");
  }.property("_submitted"),

  childValid: (function() {
    var value;
    value = (this.get('childCollection') != null ? this.get('childCollection').filterBy('isValid', false).get('length') === 0 : true);
    return value;
  }).property('childCollection.@each.isValid'),

  isValid: Ember.computed("validators.@each.isValid", function() {
    var compactValidators, filteredValidators, valid;
    compactValidators = this.get("validators").compact();
    filteredValidators = Ember.EnumerableUtils.filter(compactValidators, function(validator) {
      return !validator.get("isValid");
    });
    valid = filteredValidators.get("length") === 0;
    if (this.get("childCollection").length > 0) {
      valid = valid && this.get("childValid");
    }
    return valid;
  }),

  isInvalidAfterSubmit: (function() {
    return this.get('isInvalid') && this.get('submitted');
  }).property('isInvalid', 'submitted'),

  validationName: function(property) {
    return this.validationOption(property, "friendlyName") || property;
  },

  validations: {
    childValid: {
      acceptance: {
        message: "Please fix the errors to continue"
      }
    }
  }
});
