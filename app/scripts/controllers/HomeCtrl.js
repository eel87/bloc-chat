(function() {
  function HomeCtrl($uibModal, $scope, Room, Message) {
    this.setActiveRoom = function(room) {
      console.log(JSON.stringify(room));
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
    this.currentMessages = function(roomId) {
      Message.getRoomById(roomId);
    }
  }
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', '$scope', 'Room', 'Message', HomeCtrl]);
})();
