/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var kokiTrainings = sequelize.define('kokiTrainings', {
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		kokiId: {
			type: DataTypes.INTEGER,
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
		expiredAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'expireAt'
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'status'
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
		tableName: 'koki_trainings'
	});

	return kokiTrainings;
};
