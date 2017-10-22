const express = require('express');

const router = express.Router();

let db = require('../dbs/connection')
let userSQL = require('../dbs/userSql')

router.post("/finduser", (req, res) => {
    const name = req.body.name;

    db.query(userSQL.findUser, name, (err,result) => {

        if(err){
            return err;
        }
        res.json({isSuccess: true});
    })

});

module.exports = router;

