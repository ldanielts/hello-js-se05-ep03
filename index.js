const express = require("express");
const app = express();

app.get("/hello/:id", (req, res) => {
    console.log("Hello from the other side!");
    console.log(req.query);
    console.log(req.params);
    res.send(`Hello, ${req.query.name}!!!. Seu id é ${req.params.id}`);
});

app.listen(3000, () => console.log("Server online!"));

