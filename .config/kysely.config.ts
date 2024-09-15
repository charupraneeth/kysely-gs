import { dialect } from "../src/database";
import { defineConfig } from "kysely-ctl";

export default defineConfig({
  // replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
  dialect,
  migrations: {
    migrationFolder: "src/migrations",
  },
  //   plugins: [],
  //   seeds: {
  //     seedFolder: "seeds",
  //   }
});
