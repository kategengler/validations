import Ember from 'ember';

var buildChildMessages,
  __hasProp = {}.hasOwnProperty;

buildChildMessages = function(parent, prefix) {
  var name, property, results;
  if (prefix == null) {
    prefix = "";
  }

  results = [];
  for (property in parent) {
    if (!__hasProp.call(parent, property)) {
      continue;
    }

    if (!parent.hasOwnProperty(property)) {
      continue;
    }

    if (['toString', '__nextSuper', '0'].indexOf(property) >= 0) {
      continue;
    }

    name = prefix.length > 0 ? prefix + "." + property : property;
    results = results.concat(buildChildMessages(parent[property], name));
    results.push({
      name: name,
      messages: parent[property]
    });
  }
  return results;
};

export default Ember.Mixin.create({
  all: function() {
    buildChildMessages(this);
  }.property()
});
