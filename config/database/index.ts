import sqlQuestFactory, { SqlQuest } from '@bitreel/sql-quest';
import Deasyncify from 'deasyncify';
import logger from '../logger';
import * as process from 'process';
import Env from '../../utils/env/env';

export const sqlQuest: SqlQuest = sqlQuestFactory({
    databaseUrl: Env.get<string>('DB_URL')
});

let retry = 3;

export async function connectDB(): Promise<SqlQuest> {
    const [, err] = await Deasyncify.watch(sqlQuest.connect());

    if (err != null) {
        logger.error(err);
        if (retry > 0) {
            logger.error(`Error connecting to database, retrying... (${retry} left)`);
            retry -= 1;
            await connectDB();
        }

        process.exit(1);
    }

    logger.info('Connected to postgres database');

    return sqlQuest;
}
