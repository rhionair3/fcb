/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var gerobaks = sequelize.define('gerobaks', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		codeNo: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'code_no'
		},
		franchiseId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'franchise_id'
		},
		gerobakId: {
			type: DataTypes.INTEGER(11).UNSIGNED,
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
		tableName: 'gerobaks'
	});

	gerobaks.associate = function (models) {
		models.gerobaks.belongsTo(models.gerobak_masters);
		models.gerobaks.belongsTo(models.users);
	};

	return gerobaks;
};
