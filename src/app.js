const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT || 3000

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