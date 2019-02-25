/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var employeeRoles = sequelize.define('employeeRoles', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		roleName: {
			type: DataTypes.STRING(30),
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
