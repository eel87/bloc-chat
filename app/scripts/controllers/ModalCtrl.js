(function() {
  function ModalCtrl(Room, ui.bootstrap)) {
    this.add = function(roomName) {
      rooms.$add({ name: roomName });
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['ui.bootstrap', 'Room', ModalCtrl]);
})();
