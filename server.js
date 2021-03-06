const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const db = require("./models")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('./public'))
/*.get('*',function (req,res) {
    res.sendFile('./public/index.html');
    })*/
var MONGODB_URI = "mongodb://localhost:/workout";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:/workout", { useNewUrlParser: true });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});