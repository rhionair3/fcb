/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('postals', {
		districtId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'districts',
				key: 'id'
			},
			field: 'district_id'
		},
		postalCode: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'postal_code'
		}
	}, {
			timestamps: false
	}, {
		tableName: 'postals'
	});
};
