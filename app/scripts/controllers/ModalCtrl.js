(function() {
  function ModalCtrl($uibModal, $uibModalInstance, Room) {
    // Close modal window button
    this.cancel = function () {
      $uibModalInstance.close();
    }
    this.createRoom = function (roomName) {
      Room.add(roomName);
      $uibModalInstance.close();
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', 'Room', ModalCtrl]);
})();
