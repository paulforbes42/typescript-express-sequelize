import Debug, {Debugger} from 'debug';
import {Router, Request, Response} from 'express';

const debug: Debugger = Debug('Server:Routes:HelloWorld');
const router: Router = Router();

router.get('hello-world', (req: Request, res: Response) => {
    debug('Hello World Route called');
    res.json({
        message: 'Hello World!',
        requestBody: req.body,
    });
});

export default router;
