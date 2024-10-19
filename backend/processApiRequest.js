const processApiRequest = (req,res) => {
    const {cardNumber, cardHolderName, expiryDate, cvv, email, country, address, street, city, state,zip} = req.body;
    console.log('body', req.body);
    res.json({message: `Express get end point`});
};

module.exports = processApiRequest;