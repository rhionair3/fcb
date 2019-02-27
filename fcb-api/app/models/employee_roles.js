/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var employeeRoles = sequelize.define('employeeRoles', {
		roleName: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'role_name'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updatedAt'
		}
	}, {
		tableName: 'employee_roles'
	});

	return employeeRoles;
};
