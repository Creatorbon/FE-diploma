app.controller('loginCtrl', loginCtrl);

loginCtrl.$injector = ['$scope', 'dataBase'];

function loginCtrl($scope, dataBase){
  var wm = $scope;

  wm.login = function(){
    if (!!wm.user_pass && !!wm.user_login) {
      var user = {
        name : wm.user_login,
        password: wm.user_pass
      };

      dataBase.check(user);
      
    }
  }
};