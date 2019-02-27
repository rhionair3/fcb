/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var districts =  sequelize.define('districts', {
		regencyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'regencies',
				key: 'id'
			},
			field: 'regency_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		areaCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'area_code'
		},
		sapAreaCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sap_area_code'
		},
		tlcArea: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tlc_area'
		}
	}, {
			timestamps: false
	}, {
		tableName: 'districts'
	});

	return districts;
};
