import "reflect-metadata";
import express from "express";
import indexRoutes from "./routes/index.routes";
const cors = require("cors");

const app = express();
if (process.env.NODE_ENV !== "test") {
    const connect = async () => {
        try {
            await console.log("DB CONNECTED");
        } catch (e) {
            process.exit();
        }
    };
    const bd = connect();
}

//Middelwares
app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 5000);

app.use("/api/v1", indexRoutes);

export default app;