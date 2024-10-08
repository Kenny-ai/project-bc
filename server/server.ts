import express, { Application } from "express";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config({
  path: "./config/config.env",
});

const PORT = process.env.PORT;

const app: Application = express();

const server = app.listen(PORT, (): void =>
  console.log(`Server running on PORT ${PORT}`.magenta.bold)
);

// Handle Promise rejections
process.on("unhandledRejection", (err: Error, promise) => {
  console.error(err);
  console.log(`Error: ${colors.red(err.message)}`);
  // Close the server && exit the process
  server.close(() => process.exit(1));
});
