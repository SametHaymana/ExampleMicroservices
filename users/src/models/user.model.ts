import { Sequelize, Model, DataType, DataTypes } from 'sequelize';
import { seq } from '../services/db.services';

export class Users extends Model {
  declare id: string;
  declare name: string;
  declare surname: string;
  declare email: string;
  declare password: string;

  // User Types
  // 0 Basic User
  declare type: number;

  declare updateAt: Date;
  declare createdAt: Date;
}

Users.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: seq, timestamps: true }
);
