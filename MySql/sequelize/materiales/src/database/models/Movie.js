module.exports = (sequelize, DataTypes) => {
    const alias = 'Movie';
    const columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        rating: DataTypes.FLOAT,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER,
        genre_id: DataTypes.INTEGER,  
    };
    const config = {
        tableName: 'movies',
        timestamps: false,
    };
  const Movie = sequelize.define(alias, columns, config);

  Movie.associate = (models) => {
    Movie.belongsTo(models.Genre, {
      as: 'genres',
      foreignKey: 'genre_id'
    });
    
    Movie.belongsToMany(models.Actor, {
      as: 'actors',
      through: 'actor_movie',
      foreignKey: 'movie_id',
      otherKey: 'actor_id',
      timestamps: false
    });
  }

  return Movie;
}