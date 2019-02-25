/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var kokis = sequelize.define('kokis', {
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
		franchiseId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'franchise_id'
		},
		identityId: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'identity_id'
		},
		fullname: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'fullname'
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
		tableName: 'kokis'
	});

	kokis.associate = function (models) {
		models.kokis.hasMany(models.kokiTrainings);
		models.kokis.hasMany(models.kokiSertifikat);
	};

	return kokis;
};
