const axios = require("axios");
const express = require("express");

const app = express();

const api = axios.create({baseURL : "http://thecatapi.com"});
const params = { format: 'html'};
app.get("/cade-meus-gato", (req, res) => {
//    for (i = 0; i < 3; i++) {
//        setTimeout(function(){ 
            api.get("/api/images/get", {params}).then(ret => res.send(ret.data));
//        }, 3000);
//    }
});

app.listen(5000, _ => console.log("Olha aí os gato"));

