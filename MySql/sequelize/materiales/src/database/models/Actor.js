module.exports = (sequelize, DataTypes) => {
    const alias = 'Actor';
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        rating: DataTypes.FLOAT,
        favorite_movie_id: DataTypes.INTEGER,
    };
    const config = {
        tableName: 'actors',
        timestamps: false,
    };
  const Actor = sequelize.define(alias, columns, config);

    Actor.associate = (models) => {
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        });
    }

  return Actor;
}