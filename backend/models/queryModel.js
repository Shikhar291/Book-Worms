const { default: mongoose } = require('mongoose');
const moongoose=require('../connection');

const mySchema=new moongoose.Schema({
    
    title:String,
    description:String,
    user:{type:mongoose.Types.ObjectId,ref:"users"},
    createdAt:{type:Date,default:new Date()},//createdAt:Date//user defined
});

const queryModel=moongoose.model('query',mySchema);
module.exports={queryModel};

