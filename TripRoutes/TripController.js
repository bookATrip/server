const db = require('../Database/index').connection


exports.book = (req, res) => {
    //from  ==>  '1212.212321,123213213.212';
    //                 lng         lat
    const { body } = req;
    const sql = 'INSERT INTO trips SET ?'
    db.query(sql, body, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(400);
            return;
        }
        res.sendStatus(200)
    })
}



exports.cancel = (req, res) => {
    const { userID } = req.body;
    const sql = `DELETE FROM trips WHERE userID = ${userID}`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(400);
            return;
        }
        res.sendStatus(200);
    })
};