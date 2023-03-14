const express = require("express");
const colors = require("colors")
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db");
const cors = require("cors")
connectDB();
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Routes
app.use("/api/stands", require("./routes/standRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`listening on port: ${port}`));
