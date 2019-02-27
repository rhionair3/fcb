/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var users = sequelize.define('users', {
		username: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'username'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email'
		},
		emailToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'emailToken'
		},
		emailTokenExpired: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'emailTokenExpired'
		},
		password: {
			type: DataTypes.STRING,
			defaultValue: '12345678',
			allowNull: true,
			field: 'password'
		},
		resetPasswordToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'resetPasswordToken'
		},
		resetPasswordExpired: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'resetPasswordExpired'
		},
		fullname: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'fullname'
		},
		identityNo: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'identity_no'
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'city'
		},
		mobile: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mobile'
		},
		mobileToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mobileToken'
		},
		statusMobile: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'status_mobile'
		},
		bankName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bank_name'
		},
		bankAccountNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bank_account_no'
		},
		bankAccountName: {
			type: DataTypes.STRING,
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
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'status'
		},
		provider: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'provider'
		},
		salesId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
			references: {
				model: 'sales',
				key: 'id'
			},
			field: 'sales_id'
		},
		rolesId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 19,
			references: {
				model: 'roles',
				key: 'id'
			},
			field: 'roles_id'
		},
		deviceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '1',
			field: 'device_id'
		}, 
		userType : {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 1,
			field: 'user_type'
		}
	}, {
		tableName: 'users'
	});


	return users;
};
