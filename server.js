var express = require('express');
var app = express();

var appPort = 3300;

app
.use('/', express.static(__dirname))
.get('/get', function(req, res) {
    var data = [
        { id: 'q1', title: 'q1', answer: 'a1' },
        { id: 'q2', title: 'q2', answer: 'a2' },
        { id: 'q3', title: 'q3', answer: 'a3' },
        { id: 'q4', title: 'q4', answer: 'a4' },
        { id: 'q5', title: 'q5', answer: 'a5' },
        { id: 'q6', title: 'q6', answer: 'a6' },
        { id: 'q7', title: 'q7', answer: 'a7' },
        { id: 'q8', title: 'q8', answer: 'a8' },
        { id: 'q9', title: 'q9', answer: 'a9' },
        { id: 'q10', title: 'q10', answer: 'a10' },
        { id: 'q11', title: 'q11', answer: 'a11' },
        { id: 'q12', title: 'q12', answer: 'a12' },
        { id: 'q13', title: 'q13', answer: 'a13' },
        { id: 'q14', title: 'q14', answer: 'a14' },
        { id: 'q15', title: 'q15', answer: 'a15' },
        { id: 'q16', title: 'q16', answer: 'a16' }
    ];


    res.json(data);
}).listen(appPort, () => console.log('running on ', appPort));