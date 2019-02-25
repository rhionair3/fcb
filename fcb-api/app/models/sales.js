/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var sales = sequelize.define('sales', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		fullnamesales: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'fullname'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
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
		},
		incentivePercentage: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'incentive_percentage'
		},
		maximumIncentivePerUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'maximum_incentive_per_user'
		}
	}, {
		tableName: 'sales'
	});

	return sales;
};
