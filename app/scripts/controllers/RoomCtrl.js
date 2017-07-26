(function() {
  function RoomCtrl(CreateRoom) {
    this.customRoom = CreateRoom.customRoom;
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['CreateRoom', RoomCtrl]);
})();
