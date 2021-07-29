const express = require('express')
const app = express()
 const port = 5000;

 app.use(express.json())
 app.use(require('./routes'))

 app.listen(port, () => {
     console.log(`Server running on ${port}`);
 })