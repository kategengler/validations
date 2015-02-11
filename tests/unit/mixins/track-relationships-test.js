import Ember from 'ember';
import TrackRelationshipsMixin from 'ember-cli-uncharted-validations/mixins/track-relationships';

module('TrackRelationshipsMixin');

// Replace this with your real tests.
test('it works', function() {
  var TrackRelationshipsObject = Ember.Object.extend(TrackRelationshipsMixin);
  var subject = TrackRelationshipsObject.create();
  ok(subject);
});
