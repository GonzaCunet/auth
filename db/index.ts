import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgresql://gonza_cunet_outlook_:GN8N9wUWCP7Sv-5G092yVg@sqltest-15634.7tt.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
);

async function sequelizeSync() {
  await sequelize.sync();
}
sequelizeSync();
