import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import ArticlesRoute from "./routes/ArticlesRoute";

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        message: "Learn Node.js with friends"
    })
})


app.use("/api/v1/articles", ArticlesRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;
