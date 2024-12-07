
import serverlessHttp from "serverless-http"
import express from "express"
import mainRouter from "../index.js"

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", mainRouter);

export const handler = serverlessHttp(app);
