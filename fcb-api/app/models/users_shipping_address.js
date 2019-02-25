/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var usersShippingAddress = sequelize.define('usersShippingAddress', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		usersId: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			},
			field: 'users_id'
		},
		provinceId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'provinces',
				key: 'id'
			},
			field: 'province_id'
		},
		regencyId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'regencies',
				key: 'id'
			},
			field: 'regency_id'
		},
		districtId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'districts',
				key: 'id'
			},
			field: 'district_id'
		},
		postalId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'postal_id'
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'name'
		},
		owner: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'owner'
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'address'
		},
		contactNo: {
			type: DataTypes.STRING(15),
			allowNull: false,
			field: 'contact_no'
		},
		isDefault: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'isDefault'
		},
		isDeleted: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'isDeleted'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'createdAt'
		},
		createdBy: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'createdBy'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updatedAt'
		},
		updatedBy: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'updatedBy'
		}
	}, {
		tableName: 'users_shipping_address'
	});

	return usersShippingAddress;
};
