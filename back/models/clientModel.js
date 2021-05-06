const Client = (sequelize, DataTypes) => {
  const client = sequelize.define('Client', {
    idUser: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fone: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    zipCode: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return client;
};
module.exports = Client;
