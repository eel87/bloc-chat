(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.getRoomById = function(roomId) {
      console.log("in message service")
      debugger;
      return messages.orderByChild('roomId').equalTo(roomId);
      debugger;
    }

    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
