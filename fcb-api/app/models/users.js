/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var users = sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		username: {
			type: DataTypes.STRING(32),
			allowNull: true,
			unique: true,
			field: 'username'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'email'
		},
		emailToken: {
			type: DataTypes.STRING(32),
			allowNull: true,
			field: 'emailToken'
		},
		emailTokenExpired: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'emailTokenExpired'
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'password'
		},
		resetPasswordToken: {
			type: DataTypes.STRING(32),
			allowNull: true,
			field: 'resetPasswordToken'
		},
		resetPasswordExpired: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'resetPasswordExpired'
		},
		fullname: {
			type: DataTypes.STRING(125),
			allowNull: false,
			field: 'fullname'
		},
		identityNo: {
			type: DataTypes.STRING(24),
			allowNull: true,
			unique: true,
			field: 'identity_no'
		},
		city: {
			type: DataTypes.STRING(64),
			allowNull: true,
			field: 'city'
		},
		mobile: {
			type: DataTypes.STRING(16),
			allowNull: true,
			field: 'mobile'
		},
		mobileToken: {
			type: DataTypes.STRING(6),
			allowNull: true,
			field: 'mobileToken'
		},
		statusMobile: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'status_mobile'
		},
		bankName: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'bank_name'
		},
		bankAccountNo: {
			type: DataTypes.STRING(16),
			allowNull: true,
			field: 'bank_account_no'
		},
		bankAccountName: {
			type: DataTypes.STRING(125),
			allowNull: true,
			field: 'bank_account_name'
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
		},
		status: {
			type: DataTypes.INTEGER(6),
			allowNull: true,
			field: 'status'
		},
		provider: {
			type: DataTypes.STRING(15),
			allowNull: true,
			field: 'provider'
		},
		salesId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'sales',
				key: 'id'
			},
			field: 'sales_id'
		},
		rolesId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'roles',
				key: 'id'
			},
			field: 'roles_id'
		},
		deviceId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'device_id'
		}
	}, {
		tableName: 'users'
	});

	users.associate = function (models) {
		models.users.belongsTo(models.roles);
		models.users.belongsTo(models.sales);
		models.users.hasMany(models.usersShippingAddress);
		models.users.hasMany(models.kokis);
		models.users.hasMany(models.gerobaks);
	};


	return users;
};
