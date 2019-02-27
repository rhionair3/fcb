/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var employees =  sequelize.define('employees', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		employeeCode: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'employee_code'
		},
		fullname: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'fullname'
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'password'
		},
		employeeRoleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'employee_roles',
				key: 'id'
			},
			field: 'employee_role_id'
		},
		isActive: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'isActive'
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
		},
		isResetPassword: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '0',
			field: 'is_reset_password'
		}
	}, {
		tableName: 'employees'
	});

	return employees;
};
