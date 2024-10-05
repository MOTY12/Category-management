import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import { ApiError } from "../../error";

/**
 * A collection of middleware methods used to validate
 * requests
 * @class
 */
export class ValidationMiddleware {
    static readonly validateRequest = <T extends AnyZodObject>(schema: T) => {
        return (req: Request, res: Response, next: NextFunction) => {
            schema
                .parseAsync({ ...req.query, ...req.body })
                .then(() => {
                    return next();
                })
                .catch((error) => {
                    ApiError.appError(error, req, res, next);
                });
        };
    };
}
