// Todo Router

var Workspace = Backbone.Router.extend({
  routes: {
    '*filter': 'setFilter'
  },

  setFilter: functions(param){
      //set the current filter event, causing hiding/unhiding of Todo view items
      window.app.Todos.trigger('filter');
  }

});

app.TodoRouter = new Workspace();
Backbone.history.start();

