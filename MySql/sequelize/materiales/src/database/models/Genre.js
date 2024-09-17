module.exports = (sequelize, DataTypes) => {
  const alias = "Genre";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    ranking: DataTypes.FLOAT,
    active: Boolean,
  };

  const config = {
    tableName: "genres",
    timestamps: false,
  };

  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = (models) => {
    Genre.hasMany(models.Movie, {
      as: 'movies',
      foreignKey: 'genre_id'
    });
  }

  return Genre;
};
