var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has 'title', 'order', and 'completed' attributes.

app.Todo = Backbone.Model.extend({

  // defauls set up at initialization
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the `completed` state of this todo item.
  toggle: function() {
    console.log('############ Toggling todo');
    this.save({
      completed: !this.get('completed')
    });
  }

});
