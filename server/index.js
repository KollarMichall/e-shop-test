const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());


const userRouter = require('./routers/users');
const sectionRouter = require('./routers/section');
const collectionRouter = require('./routers/collections');
const paymentRouter = require('./routers/payment');


app.use('/users', userRouter);
app.use('/sections', sectionRouter);
app.use('/collections', collectionRouter);
app.use('/payment', paymentRouter);
app.get('/', (req, res) => {
    res.send('Welcome to E-shop API')
});

//DB

mongoose.connect(process.env.CONNECTION_URL).then(() => {
    console.log("DB is ready"); 
    
})
    .catch(err => {
        console.log(err);
    });

//server
app.listen(process.env.PORT, () => {
    console.log(`Server is running http://localhost:${process.env.PORT}`);
});