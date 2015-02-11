import EmberValidations from 'ember-validations'
import EmberValidationErrors from 'ember-validations/errors'
import DisplayAllErrors from 'uncharted-validations/mixins/display-all-errors'
import TrackRelationshipsMixin from 'uncharted-validations/mixins/track-relationships'
import ObserveChildValidity from 'uncharted-validations/mixins/observe-child-validity'

export function initialize(/* container, application */) {
  EmberValidationErrors.reopen(DisplayAllErrors)
  EmberValidations.Mixin.reopen(TrackRelationshipsMixin, ObserveChildValidity)
}

export default {
  name: 'uncharted-validations',
  initialize: initialize
};
