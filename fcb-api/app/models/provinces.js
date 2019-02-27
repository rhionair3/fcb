/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('provinces', {
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
		orders: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '999',
			field: 'orders'
		}
	}, {
			timestamps: false
	}, {
		tableName: 'provinces'
	});
};
