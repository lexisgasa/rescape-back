import chalk from "chalk";
import connectToDatabase from "./database/index.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 3500;
const databaseUrl = process.env.MONGODB_URL;

if (!databaseUrl) {
  console.log(chalk.red("Error: missing MongoDB URL"));
  process.exit(1);
}

try {
  await connectToDatabase(databaseUrl);

  startServer(Number(port));
} catch (error) {
  console.log(chalk.bgRedBright(`There was an error: ${error.message}`));
}
