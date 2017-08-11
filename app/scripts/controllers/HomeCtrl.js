(function() {
  function HomeCtrl($uibModal, $scope, Room, Message) {
    this.setActiveRoom = function(room) {
      $scope.activeRoom = room;
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
      this.messages = Message.getRoomById(roomId);
      this.roomId = roomId;
      return this.messages;
    }

    this.sendMessage = function(newMessage, roomId) {
      return Message.send(newMessage, roomId);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', '$scope', 'Room', 'Message', HomeCtrl]);
})();
