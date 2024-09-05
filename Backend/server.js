const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://vrbhavya1606:<db_password>@cluster0.z0sic.mongodb.net/',{
useNewUrlPaser: true,
useUnifiedTopology: true,
})
.then(( )=> console.log('Connected to Maongoose '))
.catch((err) => console.error('MongoDB connection error:',err));

const formData = require('./models/FormData');

app.get('/',(req,res) => {
    res.send('Server is Working')
})

app.post('/submit',async (req,res) => {
    const { name, email ,password } = req.body;
    try{
        const forData = new FormData({name,email,password});
        await formData.sava();
        res.status(201).json({passwoed:'form data saved sucessfully'});
    }  
    catch(error)   {
        res.status(500).json({error:'failed to save from data'});
    }
});   

  app.listen(PORT,() =>{
    console.log('server runing on port ${PORT}');
  });

    
