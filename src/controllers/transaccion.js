const req = require('express/lib/request');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const { model } = require('mongoose');
const transaccion = require('../models/transaccion');

module.exports = {
//no tener jsons vacios a veces jala
    index: async (req, res, next) => {
        const transacciones = await transaccion.find({});
        res.status(200).json(transacciones);
        //throw new Error('error controllador mijo');
    
    },
    //nueva peticion recivida
    newTransaccion: async (req,res, next) =>{
        const newTransaccion = new transaccion(req.body);
        const transaccionTemp = await newTransaccion.save();
        res.status(200).json(transaccionTemp);
    },
    //verificcar el nombre de los parametros  para mgdb userId/idtransaccion
    getTransaccion: async (req, res, next) =>{
        const { transaccionId } = req.params;
        const transaccion = await transaccion.findById(transaccionId);
        res.status(200).json(transaccion);
    },
    replaceTransaccion: async(req, res,next) => {
        const { transaccionId } = req.params;
        const newTransaccion = req.body;
        const oldTranasccion = await transaccion.findByIdAndUpdate(transaccionId, newTransaccion);
        res.status(200).json({success: true});

    },
    updateTransaccion: async(req, res, next) => {
        const { transaccionId } = req.params;
        const newTransaccion = req.body;
        const oldTranasccion = await transaccion.findByIdAndUpdate(transaccionId, newTransaccion);
        res.status(200).json({success: true});
    }
};