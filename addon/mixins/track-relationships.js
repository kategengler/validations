import Ember from 'ember';

export default Ember.Mixin.create({
  childCollection: null,
  setupChildCollection: (function() {
    var parent;

    this.set('childCollection', Ember.A());
    if (this.get("parentObject")) {
      return;
    }

    parent = this.get('parentController') || this.get('targetObject');
    if ((parent != null) && (parent.get('childCollection') != null)) {
      parent.get('childCollection').pushObject(this);
      this.reopen({
        willDestroy: function() {
          this._super();
          return parent.get("childCollection").removeObject(this);
        }
      });

      this.set("parentObject", parent);
    }
  }).on('init')
});
