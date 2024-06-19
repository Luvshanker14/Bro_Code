const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
require("dotenv").config();
const cors=require('cors');


const app=express();
//app.use(cors());

const corsOptions = {
  origin: 'http://127.0.0.1:3000',
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT =process.env.PORT || 4000;

app.get('/',(req,res)=>{
res.json({msg:"Welcome To LMS Server"});
})

app.use('/user',require('./routes/userRouter'));







app.listen(PORT,()=>{
  console.log(`Server is running at ${PORT}`);
})

app.use((error,req,res,next)=>{
  res.status(500).send("Oops! Something is up with our Server")
});

const URL=process.env.MONGODB_URL;
mongoose.connect(URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true

}).then(()=>{
  console.log("Database Connected");
}).catch(err=>{
  console.log(err);
})
