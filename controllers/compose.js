Junkmail.ComposeController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newMessage = this.store.createRecord('outgoingmessage', {
        email: this.get('email'),
        name: this.get('name'),
        title: this.get('title'),
        body: this.get('body'),
        date: new Date()
      });

      newMessage.save();
      this.transitionToRoute('outgoingmessages');
    }
  }
});
