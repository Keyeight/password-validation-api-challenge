import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

app.listen(port, () => {
  console.log(`Server running in ${env} mode on port ${port}`);
});