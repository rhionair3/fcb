var brambangEx = require('express');
var cors = require('cors');
var brambangApp = brambangEx();
var brambangParser = require('body-parser');
brambangApp.use(cors());
brambangApp.use(brambangParser.json());

require('./app/routes/routes.js')(brambangApp);

const brambangDB = require('./app/configs/db.js');

const Aturan = brambangDB.aturan;

brambangDB.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then ( function () {
    brambangDB.sequelize.sync({
        force: false
    }).then(() => {
        console.log('sinkronisasi data { force : true }');
    
        inisialisasi();
    });
});

var Port = 3030;

var brambangSrv = brambangApp.listen(Port, function () {
    var brambangHost = brambangSrv.address().address
    var brambangPort = brambangSrv.address().port

    console.log('App Listening at http://%s:%s', brambangHost, brambangPort);
})

function inisialisasi() {
    Aturan.bulkCreate([{
        id: 28,
        roleName: "Super Admin"
    },{
        id: 29,
        roleName: "Admin"
    },{
        id: 30,
        roleName: "Acount Manager"
    },{
        id: 31,
        roleName: "Staff Gudang"
    },{
        id: 32,
        roleName: "Staff Administrasi"
    }]);
}
