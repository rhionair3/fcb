/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var gerobakMasters = sequelize.define('gerobakMasters', {
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'status'
		},
		isDeleted: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'isDeleted'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'createdAt'
		},
		createdBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'createdBy'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updatedAt'
		},
		updatedBy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'updatedBy'
		}
	}, {
		tableName: 'gerobak_masters'
	});
	
	return gerobakMasters;
};
