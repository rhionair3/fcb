const verifikasiReg = require("./verifikasiRegistrasi");
const brambangJWT = require("./verifyToken");

module.exports = function (brambang) {
    const otentikasi = require('../controllers/Otentikasi');
    const pengguna = require('../controllers/Pengguna');
    const franchise = require('../controllers/Franchise');
    const gerobak = require('../controllers/Gerobak');
    const mgerobak = require('../controllers/GerobakMaster');
    const koki = require('../controllers/Koki');
    const alamat = require('../controllers/Alamat');

    brambang.post("/api/reg-pengguna", [verifikasiReg.cekDuplikatNamaEmail], otentikasi.registrasi);
    brambang.post("/api/login-pengguna", otentikasi.masuk);
    brambang.post("/api/master/propinsi", alamat.provincy);
    brambang.post("/api/master/kota", alamat.regency);
    brambang.post("/api/master/kecamatan", alamat.district);
    brambang.post("/api/master/kodepos", alamat.postal);

    // Rest Api Master Gerobak
    brambang.get("/api/master/gerobak", [brambangJWT.verifikasiToken], mgerobak.listGerobak);
    brambang.post("/api/master/detail-gerobak", [brambangJWT.verifikasiToken], mgerobak.detailGerobak);
    brambang.post("/api/master/tambah-gerobak", [brambangJWT.verifikasiToken], mgerobak.createGerobak);
    brambang.post("/api/master/edit-gerobak", [brambangJWT.verifikasiToken], mgerobak.editGerobak);
    brambang.post("/api/master/delete-gerobak", [brambangJWT.verifikasiToken], mgerobak.setDeleteGerobak);
    //... End Rest Master Gerobak

    // Rest Api Gerobak
    brambang.get("/api/gerobak", [brambangJWT.verifikasiToken], gerobak.listGerobak);
    brambang.get("/api/detail-gerobak", [brambangJWT.verifikasiToken], gerobak.detailGerobak);
    brambang.post("/api/tambah-gerobak", [brambangJWT.verifikasiToken], gerobak.createGerobak);
    brambang.post("/api/edit-gerobak", [brambangJWT.verifikasiToken], gerobak.editGerobak);
    brambang.post("/api/status-gerobak", [brambangJWT.verifikasiToken], gerobak.setStatusGerobak);
    //... End Rest Gerobak

    // Rest Api Koki
    brambang.get("/api/koki", [brambangJWT.verifikasiToken], koki.listKoki);
    brambang.get("/api/detail-koki", [brambangJWT.verifikasiToken], koki.detailKoki);
    brambang.post("/api/tambah-koki", [brambangJWT.verifikasiToken], koki.registrasiKoki);
    brambang.post("/api/edit-koki", [brambangJWT.verifikasiToken], koki.editKoki);
    brambang.post("/api/hapus-koki", [brambangJWT.verifikasiToken], koki.deleteKoki);
    //... End Rest Koki

    // Rest Api Franchise
    brambang.get("/api/franchise", [brambangJWT.verifikasiToken], franchise.listFranchise);
    brambang.post("/api/detail-franchise", [brambangJWT.verifikasiToken], franchise.detailFranchise);
    brambang.post("/api/tambah-franchise", [brambangJWT.verifikasiToken], franchise.createFranchise);
    brambang.post("/api/edit-franchise", [brambangJWT.verifikasiToken], franchise.editFranchise);
    brambang.post("/api/delete-franchise", [brambangJWT.verifikasiToken], franchise.deleteFranchise);
    brambang.post("/api/list-detailfranchise", [brambangJWT.verifikasiToken], franchise.listFranchiseDetail);
    brambang.post("/api/detail-detailfranchise", [brambangJWT.verifikasiToken], franchise.detailFranchiseDetail);
    brambang.post("/api/koki-franchise", [brambangJWT.verifikasiToken], franchise.listKokiFranchise);
    brambang.post("/api/tambah-detailfranchise", [brambangJWT.verifikasiToken], franchise.createFranchiseDetail);
    brambang.post("/api/edit-detailfranchise", [brambangJWT.verifikasiToken], franchise.editFranchiseDetail);
    brambang.post("/api/setDefault-detailfranchise", [brambangJWT.verifikasiToken], franchise.setDefaultDetails);
    brambang.post("/api/setDelete-detailfranchise", [brambangJWT.verifikasiToken], franchise.setDeleteDetails);
    //... End Rest Franchise
}
