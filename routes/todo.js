const todos = [
  {
    id: 1,
    description: 'Faire les courses',
    memo: 'Pomme, poire, lessive',
    priority: 2,
    updatedAt: Date.now(),
  },
  {
    id: 2,
    description: 'Envoyer le courrier',
    memo: 'Urgent',
    priority: 3,
    updatedAt: Date.now(),
  },
  {
    id: 3,
    title: 'Lire le journal',
    description: 'Smashing magazine, sidebar.io, Hacker News',
    priority: 1,
    updatedAt: Date.now(),
  },
];

let id = 4;


/*
* GET todos listing.
*/
exports.findAll = function(_, res) {
  res.json(200, todos);
};

/*
* GET todo by identifier.
*/
exports.findById = function(req, res) {
  const { id } = req.params;
  const todo = todos?.find(todo => todo.id === +id);

  if (!todo) {
    return res.json(404, {error : `Todo with id ${id} cannot be found`});
  }

  return res.json(200, todo);
};

/*
* Create a todo.
*/
exports.addTodo = function(req, res) {
  const { description, memo, priority } = req.body;
  const body = { description, memo, priority };
  const missingAttributes = Object.keys(body).filter(key => !body[key]);

  if (missingAttributes.length) {
    return res.json(400, {error : `The following attributes are mandatory ${missingAttributes.join(',')}`});
  }

  const todo = {id: id++, updatedAt: Date.now(), ...body};
  todos.push(todo);

  return res.json(201, todo);
};

/*
* Update a todo by its identifier.
*/
exports.updateTodo = function(req, res) {
  res.json(404, 'Not found');
};

/*
* Delete a todo
*/
exports.deleteTodo = function(req, res) {
  res.status(204).end();
  return;
};
