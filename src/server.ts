import app from "./app";
import { configDotenv } from "dotenv";

configDotenv();
const port: string = process.env.PORT as string;

app.listen(port, (): void => console.log(`Servidor rodando na porta ${port}`));