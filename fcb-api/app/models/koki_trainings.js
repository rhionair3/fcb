/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var kokiTrainings = sequelize.define('kokiTrainings', {
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
		startAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'startAt'
		},
		expireAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'expireAt'
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
		tableName: 'koki_trainings'
	});

	kokiTrainings.associate = function (models) {
		models.kokiTrainings.belongsTo(models.kokis, {
			onDelete: "CASCADE",
			foreignKey: {
				allowNull: false
			}
		});
	};

	return kokiTrainings;
};
