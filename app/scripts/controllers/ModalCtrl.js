(function() {
  function ModalCtrl($uibModalInstance, $uibModal) {
    //Open modal window button
    this.openAddRoomModal = function() {
      $uibModal.open();
    };
    // Close modal window button
    this.cancel = function () {
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
