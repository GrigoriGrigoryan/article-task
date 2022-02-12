import express, {Express, Response, Request, NextFunction} from "express";
import cors from "cors";
import morgan from 'morgan';
import compression from "compression";
import dotenv from 'dotenv';
import helmet from "helmet";
import {ArticleRouter} from "./routes/article";
import { HttpErr } from './exceptions';
import { errorHandler } from './controllers/errorHandler';
dotenv.config();

export const getApplication = (): Express =>
    (express()
        .use(express.json())
        .use(cors({
            origin: '*'
        }))
        .use(helmet())
        .use(morgan('tiny'))
        .use('/article', ArticleRouter)
        .use(compression())
        .get('/', (req: Request, res: Response) => {
            res.send(`Just greeting`)
            //res.redirect('http://localhost:5444/article');
        })
        .all('*', (req: Request, res: Response, next: NextFunction) => {
            next(HttpErr.notFound(`Can't find ${req.originalUrl} on this server!`));
        })
        .use(errorHandler));