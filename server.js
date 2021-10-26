import app from "./app.js";
// import dotenv from "dotenv";

// dotenv.config();
// const PORT = 3000;
// PORT=8626 node server.js

const port = process.env.PORT;
console.log(`Your port is ${port}`);

const secret = process.env.SECRET;
console.log(`Your secret is ${secret}`);


app.listen(process.env.PORT,()=>console.log(`listening on ${process.env.PORT}`));