const knex = require("../db/knex");

//Gets a list of all the messages
exports.getAllMessages = function(req, res) {
  knex("messages").then(messages => res.json(messages));
};

//Retrieves a single message
exports.getOneMessage = function(req, res) {
  knex("messages")
    .where("id", req.params.id)
    .then(message => res.json(message));
};

//Deletes a message
exports.deleteMessage = function(req, res) {
  knex("messages")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(updatedMessages => res.json(updatedMessages));
};

//Updates a message
exports.updateMessage = function(req, res) {
  knex("messages")
    .update({
      ...req.body
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedMessages => res.json(updatedMessages));
};

//Adds a new message
exports.addNewMessage = function(req, res) {
  knex("messages")
    .insert(req.body)
    .returning("*")
    .then(newMessage => res.json(newMessage));
};
