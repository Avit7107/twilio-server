const express= require ('express');
const twilio= require('./twilio');
const bodyParser= require('body-parser');
const cors =require('cors');

const app= express();
app.use(bodyParser.json())
app.use(cors());

const client= twilio.client;
const PORT= 3001;

app.get('/test', (req,res) => {
    res.send('welcome to Twilo');
});
app.post('/login', async (req,res) => {
    console.log('loging in');
    const {to, username, channel}= req.body;
    const data= await twilio.sendVerify(to,channel);
    res.send(data);
});
app.get('/verify', async(req,res) => {
    res.send('verifying code');
    const data= await twilio.verifyCode(process.env.MOBILE, req.query.code);
    return data;
});


app.listen(PORT, () => {
    console.log(" listing in PORT 3001");
})
