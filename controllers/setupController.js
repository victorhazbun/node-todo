'use strict';

var Todos = require('../models/todoModel');

module.exports = function(app) {
  
  app.get('/api/setupTodos', function(req, res) {
    var starterTodos = [
      {
        username: 'samuel',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'andrea',
        todo: 'Feed cat',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'victor',
        todo: 'Learn node',
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, function(err, results){
      res.send(results);
    });
  });
}
