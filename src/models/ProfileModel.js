const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({

    userID : { type : mongoose.Schema.Types.ObjectId, required:true },

    cus_name : { type : String, trim: true, required:true},
    cus_add : { type : String, trim: true, required:true},
    cus_city : { type : String, trim: true, required:true},
    cus_state : { type : String, trim: true, required:true, default:'Sylhet'},
    cus_postcode : { type : String, trim: true, required:true, default:'3100'},
    cus_country : { type : String, trim: true, required:true, default:'Bangladesh'},
    cus_phone : { type : String, trim: true, required:true},
    cus_fax : { type : String, trim: true, required:true, default:'00000'},

    ship_name : { type : String, trim: true, required:true},
    ship_add : { type : String, trim: true, required:true},
    ship_city : { type : String, trim: true, required:true},
    ship_state : { type : String, trim: true, required:true, default:'Sylhet'},
    ship_postcode : { type : String, trim: true, required:true, default:'3100'},
    ship_country : { type : String, trim: true, required:true, default:'Bangladesh'},
    ship_phone : { type : String, trim: true, required:true}
    
    
   

    },
    {timestamps:true, versionKey:false}

)

const ProfileModel = mongoose.model('profiles', DataSchema);

module.exports = ProfileModel;