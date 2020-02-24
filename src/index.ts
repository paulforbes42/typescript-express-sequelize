import bodyParser from 'body-parser';
import Debug, {Debugger} from 'debug';
import express, {Application} from 'express';
import session from 'express-session';

import {sequelize} from './db';
import HelloWorldRouter from './routes/hello-world';

const app: Application = express();
const port: string = process.env.PORT || '3000';
const debug: Debugger = Debug('Server:Start');

app.use(bodyParser.json());
app.use(session({
    secret: "CHANGEME",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000,
    }
}));

app.use('/api', HelloWorldRouter);

(async (): Promise<void> => {
    await sequelize.sync({force: false});
    app.listen(port, () => {
        debug(`Server Started! [port: ${port}]`);
    });
})();
