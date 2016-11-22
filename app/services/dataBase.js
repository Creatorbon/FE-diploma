app.factory('dataBase', dataBase);

function dataBase($state){
  return {
    parse: function(user_name, user_pass){
      var database = JSON.parse(localStorage.getItem('database'));
      if (user_name in database.base)
        return database.base[user_name].password == user_pass ? database.base[user_name] : undefined;
      else return undefined;
    },
    createDataBase: function(){
      var database = {
        users: [],
        base: {},
      };
      localStorage.setItem('database', 
      JSON.stringify(database));
      console.log('dataBase created');
    },
    createNew: function(user){
      user.task = [];
      var database = JSON.parse(localStorage.getItem('database'));
      database.base[user.name] = user;
      database.users.push(user.name);
      localStorage.setItem('database', JSON.stringify(database));
      console.log('new user created');
    },
    check: function(user) {
      var database = localStorage.getItem('database');
      if (!database)  {
        console.log('database not created');
        this.createDataBase();
        database = JSON.parse(localStorage.getItem('database'));
      } else database = JSON.parse(database);
      
      if (database.users.indexOf(user.name)>=0 ) {
        $state.go('/cab', {name: user.name , password: user.password});
      } else { 
        this.createNew(user) 
        $state.go('/cab', {name: user.name , password: user.password});
      }

    }
  }
};