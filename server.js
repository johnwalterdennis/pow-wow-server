// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

//for any routes import routes and mount
//const myRoute = require("./routes/myRoute");
//app.use("/api/myRoute", myRoute);

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const adminRoutes = require("./routes/adminRoutes");
const participationRoutes = require("./routes/participationRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", participationRoutes);

//deploy app to listen on port 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
