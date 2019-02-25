/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var regencies = sequelize.define('regencies', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		provinceId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			references: {
				model: 'provinces',
				key: 'id'
			},
			field: 'province_id'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		},
		isCoverageArea: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'isCoverageArea'
		},
		estimatedDeliveryDay: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1',
			field: 'estimated_delivery_day'
		},
		minEstimatedDeliveryDay: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1',
			field: 'min_estimated_delivery_day'
		},
		regencyGroupId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '1',
		}
	}, {
		tableName: 'regencies'
	});

	regencies.associate = function (models) {
		models.regencies.belongsTo(models.regencyGroups);
	};

	return regencies;
};
