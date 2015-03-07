Junkmail.Router.map(function() {
  this.resource('inboxmessages', {path: '/'});
  this.resource('welcome');
  this.resource('messages');
  this.resource('message', {path: 'messages/:message_id'});
  this.resource('new-message');
});
