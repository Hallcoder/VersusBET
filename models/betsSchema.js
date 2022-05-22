const mongoose = require("mongoose");
const Joi = require("joi");
const dotenv = require("dotenv");
const { object } = require("joi");
dotenv.config();

const betsSchema = new mongoose.Schema({
  CurrentPlayers: {
    type: Array,
  },
  dueDate: {
    type: Date,
    required: [true, "Each bet requires a due date"],
  },
  teams: {
    type: Array,
    required: true,
  },
  results:{
   type:Object,   
  },
  winner: {
    type:String,   
  }
});

module.exports.Bet = mongoose.model('bets',betsSchema);
