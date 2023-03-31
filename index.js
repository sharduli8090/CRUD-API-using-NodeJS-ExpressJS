import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";



const app = express();
const PORT = 1234;


app.use(bodyParser.json());

app.use("/users",userRoutes);

app.get('/',(req,res)=>{
    res.send("HeyTheere");
})

app.listen(PORT , ()=> {
    console.log(`Server is Running on ${PORT}`);
})