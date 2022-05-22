const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const { array } = require('joi');
require('dotenv').config();
const userSchema = new mongoose.Schema({
       email:{
           type:String,
           required:true
       },
       firstName:{
           type:String,
           minlength:1,
           maxlength:100,
           required:true
       },
       lastName:{
        type:String,
        minlength:1,
        maxlength:100,
        required:true
       },
       userName: {
           type:String,
           minlength:1,
           maxlength:100,
           required: true
       },
        NID:{
         type:Number,
         length:16,
         required: true
     }, 
       tel:{
           type:String,
           minlength:10,
           maxlength:10,
           required:true
       },
       password:{
           type:String,
           minlength:8,
           maxlength:128,
           required:true
       },
       country:{
         type:String,
         required:true
       },
       choice:{
           type:String,
           minlength:1,
           max:1,
       },
       paymentMethod:{
           type:String,
       },
       activeBets:{
           type:Array,
       },
       messages:{
           type:Array,
       },
       moneyEarned:{
           type:Number,
       },
       leaderBoardPosition:{
           type:Number,
       },
       isAdmin:
       {type:Boolean},
});
userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id:this._id,userName:this.userName,email:this.email,firstName:this.firstName,lastName:this.firstName}, process.env.JWT_sECRET_KEY);
    return token;
}
module.exports.User = mongoose.model('User',userSchema);
const validate = (user)=>{
const Schema = joi.object({
    firstName:joi.string().required().label('firstName'),
    lastName:joi.string().required().label('lastName'),
    userName:joi.string().required().label('userName'),
    email:joi.string().email().required().label('email'),
    country:joi.string().required().label('country'),
    telNumber: joi.string().required().label('telNumber'),
    password: joi().string().required().min(8).label("password"),
    idNumber:joi.number().required().label('telNumber').min(10).max(10)
})
return Schema.validate(user)
}
module.exports.validate = validate