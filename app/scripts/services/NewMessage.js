// (function() {
//   function NewMessage($firebaseArray, $cookies, Room) {
//     var NewMessage = {};
//     var ref = firebase.database().ref().child('messages');
//     var messages = $firebaseArray(ref);
//
//     NewMessage.send = function(newMessage, currentUser, roomId) {
//       var currentUser = $cookies.get('blocChatCurrentUser');
//       debugger;
//       messages.$add ({
//         username: currentUser,
//         content: newMessage,
//         roomId: roomId
//       });
//     }
//
//     return NewMessage;
//   };
//
//   angular
//     .module('blocChat')
//     .factory('NewMessage', ['$firebaseArray', '$cookies', 'Room', NewMessage]);
// })();
