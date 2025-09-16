import express from "express";
import cors from "cors";
import router from "./router/router.produto";

const app = express();

app.use(cors());
app.use(express.json());
app.use(`/produtos`, router);

export default app;