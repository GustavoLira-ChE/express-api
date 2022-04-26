import express from "express";

const app = express();

//localhost port 3000
const port = 3000;

//Use JSON in the server
app.use(express.json());

//Routes
//Methods: GET, POST, PUT, DELETE
//create an entpoint to return a list of explorers
app.get('/v1/explorers', (req, res) => {
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = { id: 1, name: 'explorer1'}
    const explorer2 = { id: 2, name: 'explorer2'}
    const explorers = [explorer1, explorer2]
    // HTTP CODE STATUS: 200
    res.status(200).json(explorers)
});
//Create an entpoint to return a explorer by ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: 'Explorer1'}
    res.status(200).json(explorer)
});


//Initialize the app
app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
});