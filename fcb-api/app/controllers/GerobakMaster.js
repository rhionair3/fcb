const brambangDB = require('../configs/db');

const MGerobak = brambangDB.masterGerobak;

exports.createGerobak = (req, res) => {
    MGerobak.create({
        code: req.body.code,
        name: req.body.name,
        status: req.body.status,
        isDeleted: req.body.isDeleted,
        createdAt: new Date(),
        createdBy: req.body.createdBy
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi': 'Tambah Gerobak',
            'gerobak': gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Gagal Menambah Gerobak",
            "gerobak": "Gagal Menambah Gerobak"
        });
    })
}

exports.listGerobak = (req, res) => {
    MGerobak.findAll().then(gerobak => {
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
    MGerobak.findOne({
        where: {
            id: req.body.id
        }
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
    MGerobak.update({
        code: req.body.code,
        name: req.body.name,
        status: req.body.status,
        isDeleted: req.body.isDeleted,
        updatedAt: new Date(),
        updatedBy: req.body.updatedBy
    }, {
        where: {
            id: req.body.id
        }
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi': 'Sukses Memperbaharui Gerobak',
            'gerobak': gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Memperbaharui Detail Gerobak",
            "gerobak": "Gagal Memperbaharui Detail Gerobak"
        });
    })
}

exports.setDeleteGerobak = (req, res) => {
    MGerobak.update({
        isDeleted: 1,
    }, {
        where: {
            id: req.body.id
        }
    }).then(gerobak => {
        res.status(200).json({
            'deskripsi': 'Sukses Menghapus Gerobak',
            'gerobak': gerobak
        })
    }).catch(error => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menghapus Detail Gerobak",
            "gerobak": "Gagal Menghapus Detail Gerobak"
        });
    })
}