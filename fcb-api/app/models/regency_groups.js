/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var regencyGroups = sequelize.define('regencyGroups', {
		nameGroup: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		minEstimatedDeliveryDayGroup: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'min_estimated_delivery_day'
		},
		maxEstimatedDeliveryDayGroup: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'max_estimated_delivery_day'
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'active'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updatedAt'
		}
	}, {
		tableName: 'regency_groups'
	});

	return regencyGroups;
};
