import mongoose = require("mongoose");

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.DATABASE_URI}`);

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(error);
  }
};
