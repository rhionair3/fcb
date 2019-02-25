/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var districts =  sequelize.define('districts', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		regencyId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			references: {
				model: 'regencies',
				key: 'id'
			},
			field: 'regency_id'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		},
		areaCode: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'area_code'
		},
		sapAreaCode: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'sap_area_code'
		},
		tlcArea: {
			type: DataTypes.STRING(32),
			allowNull: true,
			field: 'tlc_area'
		}
	}, {
		tableName: 'districts'
	});

	districts.associate = function (models) {
		models.districts.belongsTo(models.regencies, {
			onDelete: "CASCADE",
			foreignKey: {
				allowNull: false
			}
		});
	};

	return districts;
};
