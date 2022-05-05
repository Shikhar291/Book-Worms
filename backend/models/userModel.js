const moongoose=require('../connection');

const mySchema=new moongoose.Schema({
    name:String,
    username:String,
    password:String,
    age:Number,
    isAdmin:{type:Boolean,default:false},
    createdAt:{type:Date,default:new Date()},//createdAt:Date//user defined
});


const userModel=moongoose.model('users',mySchema);

module.exports={userModel};