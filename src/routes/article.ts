import {Router} from "express";
import {ArticleController} from "../controllers/Article";
import {createArticleDto, updateArticleDto} from "../dto/article";
import {validateRequestSchema} from "../middleware/validation";

export const ArticleRouter = Router();

ArticleRouter
    .get('/', ArticleController.getAll)
    .get('/:id', ArticleController.getOne)
    .post('/', createArticleDto, validateRequestSchema,ArticleController.create)
    .put('/:id', updateArticleDto, validateRequestSchema, ArticleController.update)
    .delete('/:id', ArticleController.delete);
