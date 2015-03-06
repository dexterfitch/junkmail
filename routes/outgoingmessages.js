Junkmail.OutgoingmessagesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('outgoingmessage');
  }
});
