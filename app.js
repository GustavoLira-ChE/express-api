import express from "express";

const app = express();

//Use JSON
app.use(express.json());
//localhost port 3000
const port = 3000;

//Initialize the app
app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
});