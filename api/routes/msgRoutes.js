'use strict';
module.exports = function(app) {
var messages = require('../controllers/msgController');
// messages Routes
app.route('/messages')
   .get(messages.mensagem_listar_todas)
   .post(messages.mensagem_criar);
app.route('/messages/:msgId')
   .get(messages.mensagem_ler)
   .put(messages.mensagem_atualizar)
   .delete(messages.mensagem_excluir);
};