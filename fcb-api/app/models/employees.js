/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var employees =  sequelize.define('employees', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		employeeCode: {
			type: DataTypes.STRING(225),
			allowNull: false,
			unique: true,
			field: 'employee_code'
		},
		fullname: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'fullname'
		},
		password: {
			type: DataTypes.STRING(225),
			allowNull: false,
			field: 'password'
		},
		employeeRoleId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'employee_roles',
				key: 'id'
			},
			field: 'employee_role_id'
		},
		isActive: {
			type: DataTypes.INTEGER(1),
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
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0',
			field: 'is_reset_password'
		}
	}, {
		tableName: 'employees'
	});

	employees.associate = function (models) {
		models.employees.belongsTo(models.employee_roles);
	};

	return employees;
};
