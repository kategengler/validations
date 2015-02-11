import Ember from 'ember';
import DisplayAllErrorsMixin from 'ember-cli-uncharted-validations/mixins/display-all-errors';

module('DisplayAllErrorsMixin');

// Replace this with your real tests.
test('it works', function() {
  var DisplayAllErrorsObject = Ember.Object.extend(DisplayAllErrorsMixin);
  var subject = DisplayAllErrorsObject.create();
  ok(subject);
});
