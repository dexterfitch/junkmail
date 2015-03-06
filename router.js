Junkmail.Router.map(function() {
  this.resource('inboxmessages', {path: '/'});
  this.resource('welcome');
  this.resource('outgoingmessages');
  this.resource('outgoingmessage', {path: 'outgoingmessages/:outgoingmessage_id'});
  this.resource('new-outgoingmessage');
});


// Junkmail.Router.map(function() {
//   this.resource('inboxmessages', {path: '/'}, function() {
//     this.resource('welcome');
//   });
//   this.resource('outgoingmessages', function() {
//     this.resource('outgoingmessage', {path: 'outgoingmessages/:outgoingmessage_id'});
//   });
//   this.resource('new-outgoingmessage');
// });
