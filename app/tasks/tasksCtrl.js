app.controller('tasksCtrl', tasksCtrl);

tasksCtrl.$injector = ['$stateParams', 'dataBase', '$scope', '$state', '$timeout', '$interval'];


function tasksCtrl($stateParams, dataBase, $scope, $state, $timeout, $interval){
    var wm = this; 

    wm.delay = 10;

    wm.data = dataBase.parse($stateParams.name,$stateParams.password);

    if (!wm.data) {
      $interval(function(){
      	wm.data = 'User '+ $stateParams.name + ' already registered! Password incorrect! U returns back in '+ (wm.delay--) +' sec!';     	
      }, 1000)
      $timeout(function(){
      	$state.go('/main');	
      }, 5000);
      
    }
};