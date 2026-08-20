const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const db = mysql.createConnection("mysql://atwidatachat_user:Wxpc3mU9HhX5nBaA@m1.db.pie.host:3306/atwidatachat");

// مسار لحفظ الرسالة
app.post('/save-message', (req, res) => {
    const { username, message, userid } = req.body;
    db.query('INSERT INTO chats (username, message, userid) VALUES (?, ?, ?)', 
    [username, message, userid], (err) => {
        if (err) return res.status(500).send(err);
        res.send("تم الحفظ");
    });
});

app.listen(3000, () => console.log('Server is running'));
