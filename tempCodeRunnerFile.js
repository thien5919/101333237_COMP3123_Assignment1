const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


let Employee = require('./api/controller/EmployeeController');
let User = require('./api/controller/UserController');

let app = express();

app.use(bodyParser.json());


const DB_URL = 'mongodb+srv://thien5919:MLqTvIbiF3CSnddh@cluster0.3bjq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.use('/api/v1/employee', Employee);
app.use('/api/v1/user', User);

app.get('/', function(request, response) {
    response.send('Hello World!');
});
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});

