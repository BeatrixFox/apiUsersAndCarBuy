import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import { ormconfig } from "./database";

const PORT = process.env.PORT ?? "3000";

createConnection(ormconfig)
  .then(async () => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((error: any) => console.log(error));
