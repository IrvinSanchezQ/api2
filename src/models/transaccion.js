const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const  transaccionSchema = new mongoose.Schema ({
    IdTarjetaOrigen: String,
    IdTarjetaDestino: String,
    ccv: String,
    TipoTransaccion: String, 
    Motivo: String,
    Monto: String,
    Fecha: String
});
module.exports = mongoose.model('transaccion', transaccionSchema);