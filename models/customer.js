const mongoose = require('mongoose');

//Customer Scheme

const customerSchema =mongoose.Schema({
    firstname:{ type:String},
    lastname:{ type:String},
    phone:{ type: String},
    email:{ type:String}
});

//Define and export

module.exports=mongoose.model('Customer',customerSchema);