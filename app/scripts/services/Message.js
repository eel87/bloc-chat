(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.getRoomById = function(roomId) {
      var idObject = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      console.log(JSON.stringify(idObject));
      console.log(idObject);
    }

    console.log(JSON.stringify(Message));
    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
