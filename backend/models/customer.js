const mongoose = require('mongoose'),
    schema = mongoose.Schema;


const CustomerModel = new schema({
  FirstName : String,
  LastName : String,
  DOB : String,
  Gender : String,
  Email : String,
  Website : String,
  Address : String,
  City : String
})

module.exports = mongoose.model('customer',CustomerModel);


