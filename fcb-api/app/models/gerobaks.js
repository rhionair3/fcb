/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var gerobaks = sequelize.define('gerobaks', {
		codeNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code_no'
		},
		franchiseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'franchise_id'
		},
		gerobakId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'gerobak_masters',
				key: 'id'
			},
			field: 'gerobak_id'
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
		tableName: 'gerobaks'
	});

	return gerobaks;
};
