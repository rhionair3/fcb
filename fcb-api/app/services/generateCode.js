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
    // countFranchise : async (req, res, next) => {
    //   var result =  await Franchise.findAndCountAll({
    //     where: Sequelize.where(Sequelize.col('createdAt'), 'LIKE', now + "%"),
    //     raw: true
    //   });
    // },

    countFranchiseKoki : function(franchise_id) {
      Koki.findAndCountAll({
        where : {
          franchise_id : franchise_id
        }
      }).then(result => {
          console.log(result.count);
          return result.count;
      })
    },

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
      console.log(data.count);
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

    generateKokiCode : function(franchiseId) {
      let FranchiseCode = "";
      Franchise.findOne({
        where : {
          id : franchiseId
        }
      }).then(response => {
          return response.json;
      }).then(result => {
          FranchiseCode = result.franchise.code;
          return "Get Franchise Code";
      })

      if(self.countFranchiseKoki > 0) {
          var getCountNum = self.formatNumLength(self.countFranchise, lengthDefine);

          var getCode = "K" + getCountNum;

          return FranchiseCode + "" + getCode;

      } else {
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = "K" + getCountNum;

          return FranchiseCode + "" + getCode;
      }

    },

    generateGerobakCode : function(franchiseId) {
      let FranchiseCode = "";
      Franchise.findOne({
        where : {
          id : franchiseId
        }
      }).then(response => {
          return response.json;
      }).then(result => {
          FranchiseCode = result.franchise.code;
          return "Get Franchise Code";
      })

      if(self.countFranchiseGerobak > 0) {
          var getCountNum = self.formatNumLength(self.countFranchise, lengthDefine);

          var getCode = "G" + getCountNum;

          return FranchiseCode + "" + getCode;

      } else {
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = "G" + getCountNum;

          return FranchiseCode + "" + getCode;
      }

    }
}
