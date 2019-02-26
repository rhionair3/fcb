const brambangENV = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(brambangENV.database, brambangENV.username, brambangENV.password, {
    host: brambangENV.host,
    dialect: brambangENV.dialect,
    operatorsAliases: false,

    pool: {
        max: brambangENV.max,
        min: brambangENV.pool.min,
        acquire: brambangENV.pool.acquire,
        idle: brambangENV.pool.idle
    }
});

const brambangDB = {};

brambangDB.Sequelize = Sequelize;
brambangDB.sequelize = sequelize;

brambangDB.pengguna = require('../models/employees')(sequelize, Sequelize);
brambangDB.aturan = require('../models/employee_roles')(sequelize, Sequelize);

brambangDB.masterGerobak = require('../models/gerobak_masters')(sequelize, Sequelize);

brambangDB.franchiseAturan = require('../models/roles')(sequelize, Sequelize);
brambangDB.franchise = require('../models/users')(sequelize, Sequelize);
brambangDB.franchiseShip = require('../models/users_shipping_address')(sequelize, Sequelize);
brambangDB.franchiseGerobak = require('../models/gerobaks')(sequelize, Sequelize);
brambangDB.koki = require('../models/kokis')(sequelize, Sequelize);
brambangDB.kokiTraining = require('../models/koki_trainings')(sequelize, Sequelize);
brambangDB.kokiSertifikat = require('../models/koki_sertifikats')(sequelize, Sequelize);

brambangDB.propinsi = require('../models/provinces')(sequelize, Sequelize);
brambangDB.kota = require('../models/regencies')(sequelize, Sequelize);
brambangDB.kecamatan = require('../models/districts')(sequelize, Sequelize);
brambangDB.kodepos = require('../models/postals')(sequelize, Sequelize);


brambangDB.regencyGroups = require('../models/regency_groups')(sequelize, Sequelize);
brambangDB.sales = require('../models/sales')(sequelize, Sequelize);

brambangDB.menus = require('../models/menus')(sequelize, Sequelize);

module.exports = brambangDB;