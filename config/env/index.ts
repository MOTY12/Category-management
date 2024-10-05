import development from "./development";
import test from "./test";
import production from "./production";
import { configDotenv } from "dotenv";
import staging from "./staging";
configDotenv();

const defaults = {
    PORT: process.env.PORT,
    API_VERSION: process.env.API_VERSION,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    API_DOMAIN: process.env.API_DOMAIN
};

const config = {
    development: { ...defaults, ...development },
    test: { ...defaults, ...test },
    staging: { ...defaults, ...staging },
    production: { ...defaults, ...production }
}[process.env.NODE_ENV || "development"];

export default config;
