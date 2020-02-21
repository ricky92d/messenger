var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/message-api');

mongoose.Promise = Promise;

module.exports.Message = require("./message");