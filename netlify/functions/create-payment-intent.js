require ("dotenv").config(); //Importing the .env library

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//Building a basic function that receives a payment request where we receive an amount value and pass it to stripe to make a payment intent and return 
// the payment intent with statuscode 200 if successful if not return with status code 400.
exports.handler =  async (event) => {
    try{
       const {amount} = JSON.parse(event.body);

       const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types: ['card'],
       });

       return{
        statusCode: 200,
        body: JSON.stringify({paymentIntent})
       };
    }catch(error){
        console.log({error});
        return{
            statusCode: 400,
            body: JSON.stringify({error}),
        };
    }
};


