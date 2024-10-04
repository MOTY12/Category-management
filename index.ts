import { envValidatorSchema } from "./utils/env/env.validator";
import Env from "./utils/env/env";
import logger from "./config/logger";
// import { connectDB } from "./config/database";
import App from "./config/express";
import { AppEnv } from "./utils/enums";
import http from "http";
// import redisHelper from "./utils/helpers/redis.helpers";


async function main(App: (...args: unknown[]) => http.Server) {
    try {
        // run the following three before initializing App function
        await Env.validateEnv(envValidatorSchema);

        // initialize Database
        // await connectDB();

        // initialize express app
        const app = App();
        const PORT = Env.get<number>("PORT") || 3002;
        logger.info(`Server started on port ${PORT} ....`);

        // start server
        app.listen(PORT, () => {
            const NODE_ENV = Env.get<string>("NODE_ENV");
            // redisHelper.setUp();
            logger.info("Server started");
            NODE_ENV !== AppEnv.PRODUCTION &&
                logger.info(`[server]: Server is running at http://localhost:${PORT}. Socket server on ws://localhost:3002`);
        });
    } catch (error) {
        logger.error("Error: Error occurred while starting server", error);
    }
}
main(App);
