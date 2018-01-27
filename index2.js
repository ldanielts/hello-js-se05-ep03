const axios = require("axios");
const express = require("express");

const app = express();

const baseURL = "https://api.github.com";
const api = axios.create({baseURL});
const url = "/search/repositories";
let plats = [];

statistics = function(what) {
    var params = { q: what};
    var result = 0;
    api.get(url, {params}).then(ret => {
        result = ret.data.total_count;
        for (i = 0; i < 3; i++) {
            console.log(ret.data.items[i].id + ": " + ret.data.items[i].name);
        }
        console.log("--------------------------------------------------------------------");
        plats.push({ what: result});
    });
}

statistics("angular");
statistics("react");
statistics("vue");
statistics("backbone");
statistics("jquery");

console.log(plats);

app.get("/seguidores/:username", (req, res) => {
    api.get(`/users/${req.params.username}/followers`)
        .then(ret => {
            res.send("<p>Este usuário tem " + ret.data.length + " seguidores</p>")
            res.send(ret.data)
        })
        .catch(err => res.status(500).send(err.response.data));
});

app.get("/busca", (req, res) => {
    api.get("/search/users", {
        params: {
            q : req.query.user
        }
    }).then(ret => {
        res.send(ret.data);
    }).catch(err =>
        {
            res.status(500).send(err.response.data);
        }
    )
});
app.listen(3000, _ => {
    console.log("No ar!");
});
