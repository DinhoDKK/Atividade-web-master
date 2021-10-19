

const albuns = require('./AlbunsRoute');
/**
Sintaxe de uma função qualquer: function() {}
Sintaxe de uma arrow function: () => {}
 */
module.exports = app => {
    app.use(albuns);
}