/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('provinces', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		orders: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '999',
			field: 'orders'
		}
	}, {
		tableName: 'provinces'
	});
};
