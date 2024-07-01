// require("dotenv").config({ path: "./.env" });
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
dotenv.config({ path: "./.env" });

import express from "express";
import connectDB from "./db/index.js";
const app = express();

connectDB();
