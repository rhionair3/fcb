/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var regencies = sequelize.define('regencies', {
		provinceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'provinces',
				key: 'id'
			},
			field: 'province_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		isCoverageArea: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '0',
			field: 'isCoverageArea'
		},
		estimatedDeliveryDay: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '1',
			field: 'estimated_delivery_day'
		},
		minEstimatedDeliveryDay: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '1',
			field: 'min_estimated_delivery_day'
		},
		regencyGroupId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '1',
		}
	}, {
			timestamps: false
	}, {
		tableName: 'regencies'
	});

	return regencies;
};
