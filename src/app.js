
//code below the same as import request in Python however in Js it use a const variable.
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT || 3000
//It will return the path and backward ..\
const publicStaticDirectPath = path.join(__dirname, 'public')

app.get('', (req, res) => {
    res.send("Hi this is weather app");
})
// fetch the data with a API, req - whoever has this data)
app.get('/weather',(req,res) => {
    res.send("This is weather end point.")
});
app.get('*',(req,res) => {
    res.send("Page not found")
});


app.listen(port, () => {
    console.log(" Server is up and running on port: ", port);
});