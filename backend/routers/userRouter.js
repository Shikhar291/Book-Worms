const express = require("express");
const router = express.Router();
const Model = require("../models/userModel").userModel;

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then((data) => {
      console.log("User data saved successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/verify", (req, res) => {
  let formdata = req.body;

  Model.findOne({ email: formdata.email })
    .then((data) => {
      if (data) {
        console.log("data found");
        if (data.password === formdata.password) {
          console.log("login successfull");
          res.status(200).json(data);
        } else {
          console.log("password not matched");
          res.status(300).json({ status: "fail" });
        }
      } else {
        console.log("data not found");
        res.status(300).json({ status: "fail" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("User data saved successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = { router };
