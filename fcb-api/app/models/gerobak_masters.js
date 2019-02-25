/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var gerobak_masters = sequelize.define('gerobakMasters', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		code: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'code'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'name'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'status'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'createdAt'
		},
		createdBy: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'createdBy'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updatedAt'
		},
		updatedBy: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'updatedBy'
		}
	}, {
		tableName: 'gerobak_masters'
	});

	gerobak_masters.associate = function (models) {
		models.gerobak_masters.hasOne(models.gerobaks);
	};

	return gerobak_masters;
};
