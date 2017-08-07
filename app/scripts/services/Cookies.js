(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // var user = prompt("what you wanna be called yo?")
      // $cookies.put('blocChatCurrentUser', user)
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
