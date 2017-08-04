(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.getRoomById = function(roomId) {
      messages.orderByChild('roomId').equalTo(roomId);
    }

    Message.content =  function(content) {
      messages.orderByChild('content').equalTo(content);
    }
    
    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
