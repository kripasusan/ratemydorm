const mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost:27017/mydorm',{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false });
mongoose.connect('mongodb+srv://userone:userone@ratemydorm.6v4uo.mongodb.net/mainproject?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false });
   
const Schema=mongoose.Schema;
    const hstlschema= new Schema(
    {
        nameofclg:String,
        nameofhstl:String,
        gen:String,
        dateofreview:String
    });
    var hstldata=mongoose.model('hstlnames',hstlschema);
    module.exports=hstldata;