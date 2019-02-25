const brambangDB = require('../configs/db');

const Gerobak = brambangDB.franchiseGerobak;

exports.createGerobak = (req, res) => {
    Gerobak.create({
        code_no: req.body.code_no,
        franchise_id: req.body.franchise_id,
        gerobak_id: req.body.gerobak_id,
        createdAt: new Date(),
        createdBy: req.body.createdBy,
        updatedAt: "",
        updatedBy: ""
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi': 'Tambah Gerobak',
            'gerobak': gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Gagal Menambah Gerobak",
            "franchise": "Gagal Menambah Gerobak"
        });
    })
}

exports.listGerobak = (req, res) => {
    Gerobak.findAll({
        include: [{
            model: Gerobak,
            through: {
                attributes: ['gerobak_id', 'id']
            }
        }]
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi': 'List Gerobak',
            'gerobak': gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Data List Gerobak",
            "gerobak": "Gagal Menampilkan Data List Gerobak"
        });
    })
}

exports.detailGerobak = (req, res) => {
    Gerobak.findOne({
        where: {
            id: req.id
        },
        include: [{
            model: Gerobak,
            through: {
                attributes: ['gerobak_id', 'id']
            }
        }]
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi': 'Detail Gerobak Franchise',
            'gerobak': gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Detail Gerobak",
            "gerobak": "Gagal Menampilkan Detail Gerobak"
        });
    })
}

exports.editGerobak = (req, res) => {
    Gerobak.update({
        code_no: req.body.code_no,
        franchise_id: req.body.franchise_id,
        gerobak_id: req.body.gerobak_id,
        status: req.body.status,
        updatedAt: new Date(),
        updatedBy: ""
    }, {
        where: {
            id: req.body.id
        }
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi': 'Sukses Memperbaharui Gerobak Franchise',
            'gerobak': gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Memperbaharui Detail Gerobak",
            "gerobak": "Gagal Memperbaharui Detail Gerobak"
        });
    })
}

exports.setStatusGerobak = (req, res) => {
    MGerobak.update({
        status: req.status
    }, {
        where: {
            id: req.id
        }
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi': 'Sukses Ubah Status Gerobak Franchise',
            'gerobak': gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Memperbaharui Status Detail Gerobak",
            "gerobak": "Gagal Memperbaharui Status Detail Gerobak"
        });
    })
}
