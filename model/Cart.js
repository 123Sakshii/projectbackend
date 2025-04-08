const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    products:[
        {
            type:mongoose.Schema.ObjectId,
            refI:"product"
        }
    ],
    total:{
        type:Number
    }
})

const Cart=mongoose.model('Cart',cartSchema);
module.exports={Cart}