
const express= require('express');
const app = express();

let PORT = process.env.PORT;
const router = require("./router");
const ejs = require("ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("views","views");
app.use("/",router);
app.set("view engine","ejs");

//LISTENING
if(PORT == null || PORT == ""){
    PORT = 4000;
}

app.listen(PORT,()=>{
    console.log("Server started");
})

