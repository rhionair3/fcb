const brambangDB = require('../configs/db');

const Koki = brambangDB.koki;
const Sertifikat = brambangDB.kokiSertifikat;
const Training = brambangDB.kokiTraining;

exports.registrasiKoki = (req, res) => {
    Koki.create({
        code: req.body.code,
        franchiseId: req.body.franchise_id,
        identityId: req.body.identity_id,
        fullname: req.body.fullname,
        status: req.body.status,
        createdAt: new Date(),
        createdBy: req.body.createdBy,
        updatedAt: "",
        updatedBy: ""
    }).then(koki => {

    }).catch({

    })
}

exports.detailKoki = (req, res) => {
    Koki.findOne({
        where: {
            id: req.id
        },
        include: [{
            model: Sertifikat,
            through: {
                attributes: ['kokiId', 'id']
            }
        },{
            model: Training,
            through: {
                attributes: ['kokiId', 'id']
            }
        }]
    }).then(koki => {

    }).catch({

    })
}

exports.listKoki = (req, res) => {
    Koki.findAll({
        include: [{
            model: Sertifikat,
            through: {
                attributes: ['kokiId', 'id']
            }
        },{
            model: Training,
            through: {
                attributes: ['kokiId', 'id']
            }
        }]
    }).then(koki => {

    }).catch({

    })
}

exports.editKoki = (req, res) => {
    Koki.update({
        code: req.body.code,
        franchise_id: req.body.franchise_id,
        identity_id: req.body.identity_id,
        fullname: req.body.fullname,
        status: req.body.status,
        updatedAt: new Date(),
        updatedBy: ""
    }).then(koki => {

    }).catch({

    })
}

exports.deleteKoki = (req, res) => {
    Koki.update({
        status: 0
    }, {
        where: {
            id: req.id
        }
    }).then(koki => {

    }).catch({

    })
}
