(function() {
  function HomeCtrl($uibModal, $scope, Room) {
    console.log("in hm ctrl")
    $scope.activeRoom = function(roomName) {
      return roomName;
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
    .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
