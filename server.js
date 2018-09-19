const express = require('express');
const app = express();
var routes = require('./routes')

app.use('/people', routes);

app.listen(process.env.PORT || 8080);
