const brambangDB = require('../configs/db');

const Franchise = brambangDB.franchise;
const FranchiseDetail = brambangDB.franchiseShip;
const FranchiseKoki = brambangDB.koki;

exports.detailFranchise = (req, res) => {
    Franchise.findOne({
        where: {
            id: req.body.id
        }
    }).then(franchise => {
        res.status(200).json({
            'deskripsi': 'Detail Franchise',
            'franchise': franchise
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Detail Franchise",
            "franchise": "Gagal Load Detail Franchise"
        });
    })
}

exports.detailFranchiseDetail = (req, res) => {
    FranchiseDetail.findOne({
        where: {
            usersId: req.body.usersId,
            isDefault: 1
        },
    }).then(franchise => {
        res.status(200).json({
            'deskripsi': 'Detail Franchise',
            'franchiseDetails': franchise
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Detail Franchise",
            "franchise": "Gagal Load Detail Franchise"
        });
    })
}

exports.listFranchise = (req, res) => {
    Franchise.findAll({
      where: {
        rolesId: 19
      }
    }).then(franchises => {
        res.status(200).json({
            'deskripsi': 'List Franchise',
            'franchises': franchises
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Pengguna",
            "franchises": "Gagal Load Data Franchise"
        });
    })
}

exports.listKokiFranchise = (req, res) => {
    FranchiseKoki.findAll({
        where: {
            franchise_id: req.body.franchise_id
        }
    }).then(koki => {
        res.status(200).json({
            'deskripsi': 'List Franchise',
            'kokis': koki
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Koki",
            "kokis": "Gagal Load Data Koki"
        });
    })
}

exports.createFranchise = (req, res) => {
  let data = req.body.dataSimpan;
  console.log("data di tambah franchise : " + data);
  brambangDB.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then ( function () {
    Franchise.create({
        username: data.username,
        email: data.email,
        fullname: data.fullname,
        identityNo: data.identityNo,
        city: data.city,
        mobile: data.mobile,
        createdAt: new Date(),
        status: data.status,
        roleId: data.role_id,
        userType: data.userType

    }).then(franchise => {
        res.status(200).json({
            "deskripsi": "Data Franchise Franchise Ditambahkan",
            "franchise": franchise
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menambah Data Franchise",
            "error": err
        });
    })
  });
}

exports.editFranchise = (req, res) => {
    Franchise.update({
        userType: req.body.userType,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname,
        identityNo: req.body.identityNo,
        city: req.body.city,
        mobile: req.body.mobile,
        mobileToken: req.body.mobileToken,
        statusMobile: req.body.status_mobile,
        bank_name: req.body.bank_name,
        bankAccountNo: req.body.bank_account_no,
        bankAccountName: req.body.bank_account_name,
        updatedAt: new Date(),
        status: req.body.status

    }, {
        where: {
            id: req.body.id
        }
    }).then(franchise => {
        res.status(200).json({
            "deskripsi": "Memperbaharui Data Franchise",
            "franchise": franchise
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Memperbaharui Data Franchise",
            "error": err
        });
    })
}

exports.createFranchiseDetail = (req, res) => {
    let data = req.body.dataSimpan;
    console.log(data);

    brambangDB.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then ( function () {
        FranchiseDetail.create({
            usersId: data.franchiseId,
            provinceId: data.provinceId,
            regencyId: data.regencyId,
            districtId: data.districtId,
            postalId: data.postalId,
            name: data.name,
            owner: data.owner,
            address: data.address,
            contactNo: data.contactNo,
            isDefault: data.isDefault,
            isDeleted: data.isDeleted,
            createdAt: new Date(),
            createdBy: 1
        }).then(fdetail => {
            res.status(200).json({
                "deskripsi": "Tambah Data Detail Franchise",
                "franchisedetail": fdetail
            });
        }).catch(err => {
            res.status(500).json({
                "description": "Tidak Dapat Tambah Data Detail Franchise",
                "error": err
            });
        })
    })
}

exports.editFranchiseDetail = (req, res) => {
    
    FranchiseDetail.update({
        userId: data.franchiseId,
        proviceId: data.province_id,
        regencyId: data.regency_id,
        districtId: data.district_id,
        postalId: data.postal_id,
        name: data.name,
        owner: data.owner,
        address: data.address,
        contact_no: data.contact_no,
        isDefault: data.isDefault,
        isDeleted: data.isDeleted,
        updatedAt: new Date(),
        updatedBy: data.createdBy
    }, {
        where: {
            id: data.id
        }
    }).then(fdetail => {
        res.status(200).json({
            "deskripsi": "Pembaharuan Data Detail Franchise",
            "franchisedetail": fdetail
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat memperbaharui Data Detail Franchise",
            "error": err
        });
    })
}

exports.setDefaultDetails = (req, res) => {
    FranchiseDetail.update({
        isDefault: req.body.isDefault,
        updatedAt: new Date(),
        updatedBy: req.body.updatedBy
    }, {
        where: {
            id: req.body.id
        }
    }).then(fdetail => {
        res.status(200).json({
            "deskripsi": "Set Default Data Detail Franchise",
            "franchisedetail": fdetail
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Set Default Data Detail Franchise gagal",
            "error": err
        });
    })
}

exports.setDeleteDetails = (req, res) => {
    FranchiseDetail.update({
        isDeleted: 1,
        updatedAt: new Date(),
        updatedBy: ""
    }, {
        where: {
            id: req.id
        }
    }).then(fdetail => {
        res.status(200).json({
            "deskripsi": "Menghapus Data Detail Franchise",
            "franchisedetail": fdetail
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menghapus Data Detail Franchise",
            "error": err
        });
    })
}

exports.deleteFranchise = () => {
    Franchise.update({
        status: 0,
        updatedAt: new Date(),
        updatedBy: ""
    }, {
        where: {
            id: req.id
        }
    }).then(fdetail => {
        res.status(200).json({
            "deskripsi": "Menghapus Data Franchise",
            "franchisedetail": fdetail
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menghapus Data Detail Franchise",
            "error": err
        });
    })
}
