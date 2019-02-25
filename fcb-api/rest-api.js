var brambangEx = require('express');
var cors = require('cors');
var brambangApp = brambangEx();
var brambangParser = require('body-parser');
brambangApp.use(cors());
brambangApp.use(brambangParser.json());

require('./app/routes/routes.js')(brambangApp);

const brambangDB = require('./app/configs/db.js');

const Aturan = brambangDB.aturan;
brambangDB.sequelize.sync({
    force: false
}).then(() => {
    console.log('sinkronisasi data { force : true }');
    // inisialisasi();
})

var Port = 8082;

var brambangSrv = brambangApp.listen(Port, function () {
    var brambangHost = brambangSrv.address().address
    var brambangPort = brambangSrv.address().port

    console.log('App Listening at http://%s:%s', brambangHost, brambangPort);
})

function inisialisasi() {
    Aturan.create({
        id: 28,
        role_name: "Super Admin"
    });
    Aturan.create({
        id: 29,
        role_name: "Admin"
    });
    Aturan.create({
        id: 30,
        role_name: "Acount Manager"
    });
    Aturan.create({
        id: 31,
        role_name: "Staff Gudang"
    });
    Aturan.create({
        id: 32,
        role_name: "Staff Administrasi"
    });
}
