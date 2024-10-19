const BillingUser = require('./model/BillingUser');

const processApiRequest = async (req,res) => {
    console.log('called here', req.body);
    const {cardNumber, cardHolderName, expiryDate, cvv, email, country, address, street, city, state,zip} = req.body;
    try {
        const newBillingUser = new BillingUser({
            cardNumber,
            cardHolderName,
            expiryDate,
            cvv,
            email,
            country,
            address,
            street,
            city,
            state,
            zip
        }); 
        const savedBillingUser = await newBillingUser.save(); 
        res.json(savedBillingUser);
    } catch (error) {
        res.status(500).json({message: `Error creater user ${error}`});
    }
};

module.exports = processApiRequest;