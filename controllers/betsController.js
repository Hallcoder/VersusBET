const express = require('express');
const router  = express.Router();
const _ = require('lodash');
const { Bet } = require('../models/betsSchema');
module.exports.create = async (req, res) => {
const bet = new Bet(_.pick(req.body,['teams']));
await bet.save();
res.status(200).json({
    message: 'Created bet sucessfully',
    status: 'success',
    data:bet,
})
}