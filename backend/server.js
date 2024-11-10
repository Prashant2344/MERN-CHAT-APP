const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")

const app = express();
dotenv.config();
connectDB();

//to access json data from api
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Api is running successfully");
});

app.get('/api/chats', (req,res) => {
    res.send(chats)
});

app.get('/api/chat/:id' , (req,res) => {
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server Started at port ${PORT}`));