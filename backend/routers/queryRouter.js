const router=require('express').Router();
const Model=require('../models/queryModel').queryModel;

router.post('/addquery',(req,res)=>{

    new Model(req.body)
    .save()
    .then((data) => {
      console.log("user query saved successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });

});

router.get('/getall',(req,res)=>{

    Model.find({}).populate("user")
      .then((data) => {
        console.log("product data fetched successfully..");
        res.status(200).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });

});

module.exports={router};
