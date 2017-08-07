(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.getRoomById = function(roomId) {
      var roomMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      return roomMessages;
    }

    console.log(JSON.stringify(Message));
    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
