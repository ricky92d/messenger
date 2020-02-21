var mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    name : String
    
});


var Message = mongoose.model('Message', messageSchema);

module.exports = Message;

//name
//completed
//created_date