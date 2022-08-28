const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
phoneNumber: {
    type: Int32,
    required: true,
    
},
relationship: {
    type: String,
    optional: true
},
date: {
    type: Date,
    default: Date.now
}
})
module.exports = mongoose.model('TodoTask',todoTaskSchema,'tasks');
//model(NOT DB //this is just name of the model we can refernce elsewhere, schema, collections )  (in monggose=> cluster, db,collections,dcouments)