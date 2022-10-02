import express from "express";
import baseRouter from "./api/routes";
import cookieParser from "cookie-parser";
import path from "path";
import fileUpload from "express-fileupload";
import cors from "cors";
import { errorHandler } from "./api/middleware/error-handler";
import websiteRouter from "./website/routes";

const app = express();

app.use(
  fileUpload({
    createParentPath: false,
  })
);
app.use(cors());
app.use(express.json());
app.use("/api", baseRouter);
app.use(
  express.urlencoded({
    extended: true,
  })
);

const realPath = path.join(__dirname, "./website/images");

app.use("/images", express.static(realPath));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join("src/website/views/scripts/board.js")));

app.use(cookieParser("SECRET_CHANGE_IT"));

app.use("/", websiteRouter);
app.use(errorHandler);
export default app;
