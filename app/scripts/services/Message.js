(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');

    Message.getRoomById = function(roomId) {
      var roomMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      return roomMessages;
    }

    Message.send = function(newMessage, roomId, currentUser) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      $firebaseArray(ref).$add ({
        roomId: roomId,
        username: currentUser,
        content: newMessage,
      });
    }

    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
