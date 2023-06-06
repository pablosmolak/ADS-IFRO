const express = require("express")
require("dotenv").config()

const app = express()

app.get("/", (req,res) => {
    res.send("acessou a página!")
})

const port = process.env.PORT || 3010;
app.listen(port)