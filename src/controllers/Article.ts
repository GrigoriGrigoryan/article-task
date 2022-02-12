import {Response, Request, NextFunction} from "express";
import  article  from "../services/article"
import {ExceptionMessages, HttpErr} from "../exceptions";
import StatusCode from "../exceptions/statusCodes";

class Article {
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await article.getAll();
            res.status(StatusCode.SuccessRequest).json(data);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    };
    public async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
            const data = await article.getOne(id);
            if (!data) {
                next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.ARTICLE));
            }
            res.status(StatusCode.SuccessRequest).json(data);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    }
    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const data = await article.createArticle(body);
            res.status(StatusCode.CreateRequest).json(data);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    };
    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const body = req.body;
            const updateData = await article.updateArticle(id, body);
            if (!updateData) {
                next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.ARTICLE));
            }
            res.status(StatusCode.SuccessRequest).json(updateData);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    } ;
    public async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const deletedData = await article.deleteArticle(id);
            if (!deletedData) {
                next(HttpErr.notFound(ExceptionMessages.NOT_FOUND.ARTICLE));
            }
            res.status(StatusCode.SuccessRequest).json(deletedData);
        } catch (err) {
            next(HttpErr.internalServerError(ExceptionMessages.INTERNAL));
        }
    };
}

export const ArticleController = new Article();