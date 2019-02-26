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
    FranchiseDetail.findAll({
        where: {
            user_id: req.body.franchise_id
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
    Franchise.findAll().then(franchises => {
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
    Franchise.create({
        username: req.body.username,
        email: req.body.email,
        emailToken: req.body.emailToken,
        emailTokenExpired: req.body.emailTokenExpired,
        password: req.body.password,
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpired: req.body.resetPasswordExpired,
        fullname: req.body.fullname,
        indentityNo: req.body.identity_no,
        city: req.body.city,
        mobile: req.body.mobile,
        mobileToken: req.body.mobileToken,
        statusMobile: req.body.status_mobile,
        bank_name: req.body.bank_name,
        bankAccountNo: req.body.bank_account_no,
        bankAccountName: req.body.bank_account_name,
        createdAt: new Date(),
        status: req.body.status,
        provider: req.body.provider,
        salesId: req.body.sales_id,
        roleId: req.body.role_id,
        deviceId: req.body.device_id

    }).then(franchise => {
        FranchiseDetail.create({
            userId: franchise.id,
            proviceId: req.body.province_id,
            regencyId: req.body.regency_id,
            districtId: req.body.district_id,
            postalId: req.body.postal_id,
            name: req.body.name,
            owner: req.body.owner,
            address: req.body.address,
            contact_no: req.body.contact_no,
            isDefault: req.body.isDefault,
            isDeleted: req.body.isDeleted,
            createdAt: new Date(),
            createdBy: req.body.createdBy
        }).then(fdetail => {
            res.status(200).json({
                "deskripsi": "Data Franchise Dan Detail Franchise Ditambahkan",
                "franchise": franchise,
                "franchisedetail": fdetail
            });
        }).catch(err => {
            res.status(500).json({
                "description": "Tidak Dapat Menyimpan Data Detail Franchise",
                "error": err
            });
        })
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menambah Data Franchise",
            "error": err
        });
    })
}

exports.editFranchise = (req, res) => {
    Franchise.update({
        username: req.body.username,
        email: req.body.email,
        emailToken: req.body.emailToken,
        emailTokenExpired: req.body.emailTokenExpired,
        password: req.body.password,
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpired: req.body.resetPasswordExpired,
        fullname: req.body.fullname,
        indentityNo: req.body.identity_no,
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
    FranchiseDetail.create({
        userId: franchise.id,
        proviceId: req.body.province_id,
        regencyId: req.body.regency_id,
        districtId: req.body.district_id,
        postalId: req.body.postal_id,
        name: req.body.name,
        owner: req.body.owner,
        address: req.body.address,
        contact_no: req.body.contact_no,
        isDefault: req.body.isDefault,
        isDeleted: req.body.isDeleted,
        createdAt: new Date(),
        createdBy: req.body.createdBy
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
}

exports.editFranchiseDetail = (req, res) => {
    FranchiseDetail.update({
        userId: franchise.id,
        proviceId: req.body.province_id,
        regencyId: req.body.regency_id,
        districtId: req.body.district_id,
        postalId: req.body.postal_id,
        name: req.body.name,
        owner: req.body.owner,
        address: req.body.address,
        contact_no: req.body.contact_no,
        isDefault: req.body.isDefault,
        isDeleted: req.body.isDeleted,
        updatedAt: new Date(),
        updatedBy: req.body.createdBy
    }, {
        where: {
            id: req.body.id
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
