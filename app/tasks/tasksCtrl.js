app.controller('tasksCtrl', tasksCtrl);

tasksCtrl.$injector = ['$stateParams', 'dataBase', '$scope', '$state'];


function tasksCtrl($stateParams, dataBase, $scope, $state){
    var wm = $scope;
    wm.data = dataBase.parse($stateParams.name,$stateParams.password)
    if (!wm.data) {
      $state.go('/main');
    }
};