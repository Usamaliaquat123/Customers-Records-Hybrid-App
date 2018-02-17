const express = require('express'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  customer = require('./models/customer');

// init
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
// Connection to mlab cloud
const db = mongoose.connect('mongodb://<user>:<password>@ds237848.mlab.com:37848/clienttask',(err,result) => {
  if(err)
     console.log('have an err ' + err)
  else
    console.log('conected!');
})


const customerRouter = express.Router();

  customerRouter.route('/Customers')
    .post(function(req,res){
      const customers = new customer(req.body);
      customers.save();
      res.status(201).send(customers);
    })
    .get(function(req,res){
      customer.find(function(err,result){
        if(err)
          res.status(500).send(err)
        else
          res.json(result);
      })
    })

app.use('/api', customerRouter);


app.get('/',function(req,res){
  console.log('welcome to API');
})
app.listen(port,function(){
  console.log('Sucessfully connected....!');
})