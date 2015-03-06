Junkmail.Router.map(function() {
  this.resource('inboxmessages', {path: '/'}, function() {
    this.resource('welcome');
  });
  this.resource('outgoingmessages', function() {
    this.resource('outgoingmessage', {path: 'outgoingmessages/:outgoingmessage_id'});
  });
});
