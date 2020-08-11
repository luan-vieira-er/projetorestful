'use strict';
var mongoose = require('mongoose'),
Message = mongoose.model('Messages');
exports.mensagem_listar_todas = function(req, res) {
   Message.find({}, function(err, msg) {
      if (err)
      res.send(err);
      res.json(msg);
   });
};
exports.mensagem_criar = function(req, res) {
   var new_msg = new Message(req.body);
   new_msg.save(function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};
exports.mensagem_ler = function(req, res) {
   Message.findById(req.params.msgId, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};
exports.mensagem_atualizar = function(req, res) {
   Message.findOneAndUpdate({_id: req.params.msgId}, req.body, {new: true}, function(err, msg) {
   if (err)
      res.send(err);
   res.json(msg);
   });
};
exports.mensagem_excluir = function(req, res) {
   Message.remove({
      _id: req.params.msgId
   }, function(err, msg) {
   if (err)
      res.send(err);
   res.json({ message: 'Mensagem excluída com sucesso' });
   });
};