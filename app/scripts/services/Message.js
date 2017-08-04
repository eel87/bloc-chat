(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getRoomById = function(roomId) {
      roomId = messages.orderByChild("id").equalTo(roomId);
   };

    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
