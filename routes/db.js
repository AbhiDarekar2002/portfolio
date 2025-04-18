var mysql = require("mysql");
var util = require("util");
var conn = mysql.createConnection({
    "host":"bfthadgcuitblm678tyo-mysql.services.clever-cloud.com",
    "user":"usilqdtxpldhpdzm",
    "password":"ZK4KOCUxhFmbsE1dzLyo",
    "database":"bfthadgcuitblm678tyo"

});

var exe = util.promisify(conn.query).bind(conn);


module.exports = exe;
