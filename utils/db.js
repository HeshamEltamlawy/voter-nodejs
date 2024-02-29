const mongoos = require('mongoose');
mongoos.connect('mongodb+srv://electionData:0000@cluster0.jfgdkqq.mongodb.net/?retryWrites=true&w=majority')
.then(res => console.log("good"))
.catch(err => console.log("bad"))

