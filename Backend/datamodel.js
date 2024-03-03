const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema(
{
stockName:{
    type:String,
    require:true
},
posts:[
    {
        investorName:{
            type:String,
            require:true
        },
        post_text:{
            type:String,
            require:true
        }
    }
    
]},{timestamps:true});

const DataModel = mongoose.model("posts",dataSchema);


module.exports= DataModel;



