/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var regencyGroups = sequelize.define('regencyGroups', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nameGroup: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
		},
		minEstimatedDeliveryDayGroup: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'min_estimated_delivery_day'
		},
		maxEstimatedDeliveryDayGroup: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'max_estimated_delivery_day'
		},
		active: {
			type: DataTypes.INTEGER(1),
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
