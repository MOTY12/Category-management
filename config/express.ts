import express, { Express, Request, Response } from "express";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import cors from "cors";
import { routeBase, Router } from "../app/routes";
import { ApiError } from "../utils/error";
import http from "http";
import logger from "./logger";
import Env from "../utils/env/env";
import { tryCatch } from "../utils/error/try.catch.helper";

export default function App(): http.Server {
    const app = express();

    const developmentCorsUrls = [
        "*",
        "http://localhost:5173",
        "http://localhost:5174",
        `${Env.get("CLIENT_URL")}`,
    ];

    const corsUrls = [...(Env.get("NODE_ENV") === "production" ? [] : developmentCorsUrls)];
    const corsOptions = {
        origin: corsUrls,
        credentials: true
    };

    app.use(cors(corsOptions));
    app.use(helmet());


    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    app.use(
        fileUpload({
            limits: { fileSize: 52428800 }
        })
    );
    app.disable("x-powered-by");
    app.use(routeBase.V1_PATH, Router);
    app.get("/", (req: Request, res: Response) => {
        res.send("App API running server running");
    });
    // Handles exceptions thrown in the application
    app.use(ApiError.appError);

    // handle all error instances and returns an errors response
    // eslint-disable-next-line no-unused-vars
    app.use(ApiError.genericError);

    const server = http.createServer(app);

    return server;
}
