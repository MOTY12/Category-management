import { z } from 'zod';
import { AppEnv } from '../enums';

export interface EnvProps {
    PORT: string;
    NODE_ENV: string;
    DB_URL: string;
}

export const envValidatorSchema = z.object({
    NODE_ENV: z
        .string()
        .default(AppEnv.DEVELOPMENT),
    PORT: z.string(),
    DB_URL: z.string(),
    API_VERSION: z.string()
});
