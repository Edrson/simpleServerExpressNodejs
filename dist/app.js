//^Importamos express:
const express = require('express');

//^Instanciamos express:
const app = express();

app.get('/', function (request, response) {
    console.log(request.headers);
    response.send(`Answer of server...`);
})

//^Iniciamos servidor
app.listen(3000);
console.log(`Server on port 3000...`)