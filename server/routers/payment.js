const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SK)

router.post('/', async (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }
   
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr })
        }
        res.status(200).send({ success: stripeRes })

    })


})


module.exports = router