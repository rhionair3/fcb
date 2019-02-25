/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('villages', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		districtId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			references: {
				model: 'districts',
				key: 'id'
			},
			field: 'district_id'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'villages'
	});
};
