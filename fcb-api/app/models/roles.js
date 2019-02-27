/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var roles =  sequelize.define('roles', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updatedAt'
		}
	}, {
		tableName: 'roles'
	});

	return roles;
};
