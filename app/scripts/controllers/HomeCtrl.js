(function() {
  function HomeCtrl($uibModal, $scope, Room) {
    this.setActiveRoom = function(room) {
      $scope.activeRoom = room;
      console.log("Room is now set to: " + room)
    }
    this.chatrooms = Room.all;
    //Open modal window button
    this.openAddRoomModal = function() {
      $uibModal.open({
        controller: 'ModalCtrl as modal',
        size: 'md',
        templateUrl: '/templates/modal.html'
      });
    }
  }
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', '$scope', 'Room', HomeCtrl]);
})();
