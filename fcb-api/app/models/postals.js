/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('postals', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		districtId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'districts',
				key: 'id'
			},
			field: 'district_id'
		},
		postalCode: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'postal_code'
		}
	}, {
		tableName: 'postals'
	});
};
