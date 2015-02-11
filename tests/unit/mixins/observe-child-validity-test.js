import Ember from 'ember';
import ObserveChildValidityMixin from 'ember-cli-uncharted-validations/mixins/observe-child-validity';

module('ObserveChildValidityMixin');

// Replace this with your real tests.
test('it works', function() {
  var ObserveChildValidityObject = Ember.Object.extend(ObserveChildValidityMixin);
  var subject = ObserveChildValidityObject.create();
  ok(subject);
});
