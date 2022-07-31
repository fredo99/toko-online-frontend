require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config();

module.exports = {
  env: {
    MODE: process.env.MODE,
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
};
