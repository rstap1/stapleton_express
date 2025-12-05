const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// SERVE PORTFOLIO
app.use(express.static(path.join(__dirname, "public")));

// MOUNT API ROUTE
const movieRoutes = require("./routes/movie-routes");
app.use("/api", movieRoutes);

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

