const { Mongoose, default: mongoose } = require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type: String,
        required: [true,"please add user name"]
    },
    email :{
        type:String,
        required:[true,"please add the email"]
    },
    password:{
        type:String,
        required:[true,"please add the password"]
    },
},
    {
        timestamps:true,
    }
);
module.exports=mongoose.model("user",userSchema);