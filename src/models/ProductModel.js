const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({

    title : { type : String, trim: true, required:true},
    shortDes : { type : String, trim: true, required:true },
    price : { type : String, trim: true, required:true },
    discount : { type : String, trim: true},
    discountPrice : { type : String, trim: true},
    image : { type : String, trim: true, required:true },
    stock : { type : String, trim: true, required:true, default:true},
    star : { type : String, trim: true, required:true },
    remark : { type : String, trim: true, required:true, enum:['new','trending','popular','top','special','regular'] },

    },
    {timestamps:true, versionKey:false}

)

const ProductModel = mongoose.model('products', DataSchema);

module.exports = ProductModel;