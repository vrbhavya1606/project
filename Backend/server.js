const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://vrbhavya1606:Bhavya123@cluster0.z0sic.mongodb.net/',{
useNewUrlPaser: true,
useUnifiedTopology: true,
})
.then(( )=> console.log('Connected to MaongooseDB '))
.catch((error) => console.error('MongoDB connection error:',error));

const FormData = require('./models/FormData');

app.get('/',(req,res) => {
    res.send('Server is Working')
})

app.post('/submit',async (req,res) => {
    const { name, email ,message } = req.body;
    try{
        const forData = new FormData({name,email,message});
        await formData.sava();
        res.status(201).json({message:'Form data saved sucessfully'});
    }  
    catch(error)   {
        res.status(500).json({error:'Failed to save from data'});
    }
});   

  app.listen(PORT,() =>{
    console.log(`server runing on port ${PORT}`);
  });

    
