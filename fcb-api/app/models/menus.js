/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('menus', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		icon: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'icon'
		},
		name: {
			type: DataTypes.STRING(120),
			allowNull: false,
			field: 'name'
		},
		link: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'link'
		},
		order: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'order'
		},
		level: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'level'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'status'
		}
	}, {
		tableName: 'menus'
	});
};
