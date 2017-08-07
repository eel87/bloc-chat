(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        controller: 'ModalCtrl as modal',
        size: 'sm',
        templateUrl: '/templates/username-modal.html'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();


//var user = prompt("what you wanna be called yo?")
//$cookies.put('blocChatCurrentUser', user)
