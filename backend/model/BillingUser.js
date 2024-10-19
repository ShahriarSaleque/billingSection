const { default: mongoose } = require("mongoose");


const BillingUserSchema = new mongoose.Schema({
   cardNumber: String,
   cardHolderName: String,
   expiryDate: Number,
   cvv: Number,
   email: String,
   country: String,
   address: String,
   street: String,
   city: String,
   state: String,
   zip: Number
});

const BillingUser = mongoose.model('BillingUser', BillingUserSchema);

module.exports = BillingUser;