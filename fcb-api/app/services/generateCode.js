const brambangDB = require('../configs/db');
const Sequelize = require('sequelize');
const Franchise = brambangDB.franchise;
const Koki = brambangDB.koki;
const Gerobak = brambangDB.gerobakFranchise;
const brambangDateFormat = require('dateformat');
const moment = require('moment');
const Op = Sequelize.Op;

const lengthDefine = 2;
// var now = brambangDateFormat(new Date(), 'yyyy-mm-dd');
var now = moment(new Date()).format("YYYY-MM-DD");
var splitDate = moment(new Date()).format("YYMMDD");

var self = module.exports = {
    formatNumLength : function(num, length) {
      var r = "" + num;
      while (r.length < length) {
          r = "0" + r;
      }
      return r;
    },
    // countFranchiseKoki : function(franchise_id) {
    //   Koki.findAndCountAll({
    //     where : {
    //       franchise_id : franchise_id
    //     }
    //   }).then(result => {
    //       console.log(result.count);
    //       return result.count;
    //   })
    // },

    countFranchiseGerobak : function(franchise_id) {
      Gerobak.findAndCountAll({
        where : {
          franchise_id : franchise_id
        }
      }).then(result => {
          return result.count;
      })
    },

    generateFranchiseCode: async (req, res, next) => {
      var result = await Franchise.findAndCountAll({
        where: Sequelize.where(Sequelize.col('createdAt'), 'LIKE', now + "%"),
        raw: true
      });
      let data = result;
      if (data.count > 0) {
          var getDateCode = splitDate;
          var getCountNum = self.formatNumLength((data.count + 1), lengthDefine);

          var getCode = getDateCode + "" + getCountNum;

          return getCode;

      } else {
          var getDateCode = splitDate;
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = getDateCode + "" + getCountNum;;

          return getCode;
      }
    },

    generateKokiCode : async (franchiseId) => {
      var countKoki = await Koki.findAndCountAll({
        where : { franchise_id : franchise_id },
        raw : true
      });
      var findFranchise = await Franchise.findOne({
        where : { id : franchiseId },
        raw : true
      });
      let cKoki = countKoki;
      let fFranchise = findFranchise;
      if(cKoki.count > 0) {
          var getCountNum = self.formatNumLength(cKoki.count, lengthDefine);

          var getCode = "K" + getCountNum;

          return fFranchise.asFranchiseCode + "" + getCode;

      } else {
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = "K" + getCountNum;

          return fFranchise.asFranchiseCode + "" + getCode;
      }

    },

    generateGerobakCode : async (franchiseId) => {
      var countGerobak = await Gerobak.findAndCountAll({
        where : { franchiseId : franchiseId },
        raw : true
      });
      var findFranchise = await Franchise.findOne({
        where : { id : franchiseId },
        raw : true
      });
      let cGerobak = countGerobak;
      let fFranchise = findFranchise;

      if(cGerobak.count > 0) {
          var getCountNum = self.formatNumLength(cGerobak.count, lengthDefine);

          var getCode = "G" + getCountNum;

          return fFranchise.asFranchiseCode + "" + getCode;

      } else {
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = "G" + getCountNum;

          return fFranchise.asFranchiseCode + "" + getCode;
      }

    }
}
