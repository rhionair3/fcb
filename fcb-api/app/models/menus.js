/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('menus', {
		icon: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'icon'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		link: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'link'
		},
		order: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'order'
		},
		level: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'level'
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'status'
		}
	}, {
		tableName: 'menus'
	});
};
