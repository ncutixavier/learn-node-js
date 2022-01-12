import express, { json } from "express";

const app = express();

const customMiddleware = (req, res, next) => {
    console.log("Welcome to my middleware");
    next();
}
;
app.use(customMiddleware);
app.use(json());

app.get("/", (req, res)=>{
    res.send("number 2");
});
app.post("/create_user", (req, res) => {
    const user = req.body;
    res.send({
        message: `User successfully created`,
        user
    })
});


app.listen(3000, () => {
    console.log("Listening");
});