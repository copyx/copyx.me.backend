const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://copyx:zkqudtls3$@copyx-bhyl5.mongodb.net/copyx-me?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => {
        console.log('DB is connected.');
    })
    .catch(err => {
        console.error(err);
    });

module.exports = mongoose.connection;