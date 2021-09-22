const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@ratemydorm.6v4uo.mongodb.net/mainproject?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false });
// mongoose.connect('mongodb://localhost:27017/mydorm',{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false });
    const Schema=mongoose.Schema;
    const clgschema= new Schema(
    {
        name:String,
        location:String,
        pic:String

    });
    var clgdata=mongoose.model('clgs',clgschema);
    module.exports=clgdata;

    