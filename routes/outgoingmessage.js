Junkmail.OutgoingmessageRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('outgoingmessage', params.outgoingmessage_id)
  }
})
