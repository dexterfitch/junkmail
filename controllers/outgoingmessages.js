Junkmail.OutgoingmessagesController = Ember.ArrayController.extend({
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    }
  }
});
