import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index";
export class Auth extends Model {}
Auth.init(
  {
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    user_id: DataTypes.STRING,
  },
  { sequelize, modelName: "Auth" }
);
