const db = require('../Database/index').connection
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;
exports.register = (req, res) => {
    const sql = 'INSERT INTO users SET ?';
    const { email, username, pass } = req.body;
    bcrypt.hash(pass, SALT_ROUNDS, (err, hash) => {
        if (err) {
            console.log(err);
            return;
        }
        const obj = {
            username,
            email,
            password: hash
        };
        db.query(sql, obj, (err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(409);
                return;
            }
            res.send(data);
            return;
        })
    })
}



exports.login = (req, res) => {
    const { username, pass } = req.body;
    const sql = `SELECT * FROM users WHERE username = '${username}'`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const { password } = data[0];
        bcrypt.compare(pass, password, (err, match) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!match) {
                res.sendStatus(403)
            }
            res.send(data[0])
        })
    })
}