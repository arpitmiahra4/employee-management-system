const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const { connection } = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome To MrMishra's DataBase")
})
// app.use()

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Db connected Successfully");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Listining On Port ${PORT}`);
})