const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = "You will become an amazing wed developer"

app.get('/data', (req,res) => {
    res.status(200).json(data)
})

const PORT = 4000;
app.listen(PORT, () => console.log(`server has sailed from port ${PORT} ❄️`))
