const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
dotenv.config();

const userRouter = require("./routes/users");

const app = express();
const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

app.use(logger);
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server is on ${API_URL}:${PORT}`);
});
