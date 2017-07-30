(function() {
  function HomeCtrl(Room) {
    this.chatrooms = Room.all;
    this.addRoom = function(roomName) {
      Room.add(roomName);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
