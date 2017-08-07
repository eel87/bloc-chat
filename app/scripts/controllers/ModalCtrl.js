(function() {
  function ModalCtrl($uibModal, $uibModalInstance, $cookies, Room) {
    // Close modal window button
    this.cancel = function () {
      $uibModalInstance.close();
    }
    this.createRoom = function(roomName) {
      Room.add(roomName);
      $uibModalInstance.close();
    }
    this.createUserName = function(userName) {
      $cookies.put('blocChatCurrentUser', userName);
      $uibModalInstance.close();
    }
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', 'Room', '$cookies', ModalCtrl]);
})();
