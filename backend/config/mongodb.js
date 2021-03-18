const mongoose = require('mongoose');

//conexao com mongoBD 
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'ERRO! Nao foi possivel conectar com o MongoDB';
        console.log('\x1b[41m%s\1xb[37m', msg, '\x1b[0m');
    })