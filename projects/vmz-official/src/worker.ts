import { createBbsApp } from "@vmz/bbs";

import { Database } from "./generated/iris/cloudflare.js";

export default createBbsApp<Env>({
    serviceName: "vmz-official",
    openDatabase: (env) => Database.create({ d1: env.DB }),
});
