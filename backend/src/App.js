import express from "express";
import dotenv from "dotenv";
import router  from "./routes/todo.route.js";
import authRouter  from "./routes/auth.route.js";
import cors from "cors";

// yeha p routes ko define kk rhia konsa routes  konsa router p  jayaga 







dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/todo",router);
app.use("/api/auth",authRouter);








export default app;



// Express app banana,
// middleware lagana,
// aur saare routes ko connect karna ,register karna .

