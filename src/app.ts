import express from "express";
import cors from "cors";
import router_usuario from "./routes/usuario.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(`/usuario`, router_usuario);

export default app;