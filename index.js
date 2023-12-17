import express from "express";
import session from "express-session";
import { config as dotenvConfig } from "dotenv";
import { connectToMongo } from "./db.js";
import cors from "cors";
import registerUsers from "./Auth/register.js";
import loginUsers from "./Auth/login.js"; // Corrected import name

dotenvConfig();
const db = connectToMongo();

const app = express();
const port = 6969;

app.use(express.json());
app.use(
    cors({
        origin: "http://127.0.0.1:5500", // Replace with your actual frontend origin
        methods: ["GET", "POST", "UPDATE", "DELETE", "PUT", "PATCH"],
        credentials: true,
    })
);

// Configure express-session middleware
app.use(session({
    secret: "abc1234",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
}));

// Testing route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Medico Api Server!!" });
});

// Registration and login routes
app.post("/register", registerUsers);
app.post("/login", loginUsers);

app.listen(port, () => {
    console.log(`Medico LIST app listening on port http://localhost:${port}`);
});