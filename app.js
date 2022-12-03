const express = require('express');
const app = express();
const port = 3000
const cars = require("./routes/cars")

app.get("/", (req, res) => {
    res.status(200).send("Hello Youtube!");
})

app.use("/cars",cars);

app.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong!')
    } else {
        console.log('Server is running on port ' + port);
    }
})
