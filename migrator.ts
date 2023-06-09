import { migrate } from "drizzle-orm/postgres-js/migrator";

import { db } from "@/db";

migrate(db, { migrationsFolder: "drizzle" })
  .then(() => {
    console.log("migrations done");
  })
  .catch((err) => {
    console.error("migrations failed", err);
  });
