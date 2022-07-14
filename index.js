const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.listen(3000, () => {
    console.log("node app started!!");
})

app.get("/", (req, res) => {
    res.send("{  \"response\" : \"Node app is working fine for now!!\" }");
})