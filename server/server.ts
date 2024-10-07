import { Application } from "express";

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config({
  path: "./config/config.env",
});

const PORT = process.env.PORT;

const app: Application = express();

const server = app.listen(PORT, (): void =>
  console.log(colors.magenta(`Server running on PORT ${PORT}`.bold))
);

// Handle Promise rejections
process.on("unhandledRejection", (err: Error, promise) => {
  console.error(err);
  console.log(`Error: ${colors.red(err.message)}`);
  // Close the server && exit the process
  server.close(() => process.exit(1));
});
