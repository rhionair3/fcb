/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var kokiSertifikat =  sequelize.define('kokiSertifikats', {
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
		kokiId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'kokis',
				key: 'id'
			},
			field: 'koki_id'
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
		tableName: 'koki_sertifikats'
	});

	kokiSertifikat.associate = function (models) {
		models.kokiSertifikat.belongsTo(models.kokis, {
			onDelete: "CASCADE",
			foreignKey: {
				allowNull: false
			}
		});
	};

	return kokiSertifikat;
};
