const db = require('../db');
const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    timestamp: Date,
    level: String,
    content: String,
});

const Logs = mongoose.model('Logs', logSchema);

module.exports = Logs;