import type { NextFunction, Request, Response } from "express"
import * as service from '../services/url';

/**
 * addURL controller
 * @param req Express Request
 * @param res Express Response
 */
export const addUrl = (req: Request, res: Response, next: NextFunction) => {
    (async () => {

        // body's data type
        type TBody = {
            title: string | undefined,
            url: string | undefined,
            visitedAt: string | undefined
        };
        
        const { body }: { body: TBody | undefined } = req;

        // check error
        if (body === undefined) {
            return res.status(400).json({
                message: `body is required`
            })
        }

        const notFounds = [];
        if (body.url === undefined) notFounds.push('url')
        if (body.title === undefined) notFounds.push('title');
        if (body.visitedAt === undefined) notFounds.push('visitedAt');

        if (notFounds.length !== 0) {
            return res.status(400).json({
                message: `${notFounds.join(", ")} ${notFounds.length === 1 ? 'is' : 'are'} required`
            })
        }
        try {
            // if title, url, visitedAt is not undefined, then let it process in next step
            if (body.url !== undefined && body.visitedAt !== undefined && body.title !== undefined) {
                const response = await service.addUrl(body.title, body.url, body.visitedAt);
                return res.status(201).json(response);
            }
        } catch (error) {
            next(error);
        }
    })();
}

