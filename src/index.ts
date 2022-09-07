import express from 'express'
import * as path from 'path'
import baseRouter from "./api/routes";
import { errorHandler } from "./api/middleware/error-handler";
import websiteRouter from "./website/routes";
import cookieParser from "cookie-parser";

export const app = express();

const port = process.env.PORT || 3000

app.use("/api", baseRouter);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './website/views'))
app.use("/", websiteRouter);
app.use(errorHandler);
app.use(cookieParser("SECRET_CHANGE_IT"));

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );