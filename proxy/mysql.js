var mysql = require('mysql');
var countConfig = require('../config_default').config.pageCount;
var mysqlConfig = require('../config_default').config.mysqlConfig;
var connection;
var pool  = mysql.createPool({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password : mysqlConfig.password,
    database : 'app_aguan',
    supportBigNumbers: true
});

function fSelect(page,cb) {
    var _nStart = (page - 1) * countConfig + 1;
    var _nEnd = page * countConfig;
    console.log(_nStart);
    console.log(_nEnd);
    pool.getConnection(function (err,connection) {
        if (err) {
            console.log(err);
        }else {
            connection.query('SELECT * FROM email WHERE id >= '+_nStart+' and id <= '+_nEnd, function (error, results, fields) {
                connection.release();
                if (error) {
                    return cb(error,null);
                }
                cb(null,results);
            });
        }
    })
}

function fInsert(oDb,cb) {
    console.log(oDb);
    pool.getConnection(function (err,connection) {
        if (err) {
            console.log(err);
        }else {
            var _sDate = new Date();
            var _nRegtime = _sDate.toLocaleDateString();
            connection.query('INSERT INTO email SET ?',{ city:oDb._sCity,username:oDb._sUsername,company:oDb._sCompany,duty:oDb._sDuty,tel:oDb._nTel,email:oDb._sEmail,regtime:_nRegtime}, function (error, results, fields) {
                connection.release();
                if (error) {
                    return cb(error,null);
                }
                console.log('insert success');
                cb(null,results);
            });
        }
    })
}

function fCheck(cb) {
    pool.getConnection(function (err,connection) {
        if (err) {
            console.log(err);
        }else {
            connection.query('SELECT * FROM user', function (error, results, fields) {
                connection.release();
                if (error) {
                    return cb(error,null);
                }
                cb(null,results);
            });
        }
    })
}

function fGetCount(cb) {
    pool.getConnection(function (err,connection) {
        if (err) {
            console.log(err);
        }else {
            connection.query('SELECT COUNT(id) FROM email', function (error, results, fields) {
                connection.release();
                if (error) {
                    return cb(error,null);
                }
                cb(null,results);
            });
        }
    })
}

function fSelectAll(cb) {
    pool.getConnection(function (err,connection) {
        if (err) {
            console.log(err);
        }else {
            connection.query('SELECT * FROM email', function (error, results, fields) {
                connection.release();
                if (error) {
                    return cb(error,null);
                }
                cb(null,results);
            });
        }
    })
}

module.exports = {
    fSelect,
    fInsert,
    fCheck,
    fGetCount,
    fSelectAll
};