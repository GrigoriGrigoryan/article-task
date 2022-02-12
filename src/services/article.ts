import {getRepository} from "typeorm";
import {Article} from "../entity/Article";
import {IArticle, IUpdateArticle} from "../Interfaces/Article";

export default ({
    async getAll() {
        const articles = await getRepository(Article).find();
        articles.sort((a, b) => a.id - b.id);
        

        return articles;
    },
    async getOne(id: string | number) {

        if (!Number(id)) return null;

        const article = await getRepository(Article).findOne(id);
        if (article) return article;

        return null;
    },
    async createArticle(body: IArticle) {
        if (!body) {
            throw null;  
        }

        const article =  getRepository(Article).create(body);

        return await getRepository(Article).save(article);
    },
    async updateArticle(id: string | number, body: IUpdateArticle) {
        if (!Number(id)) {
            throw null;
        }
        const article = await getRepository(Article).findOne(id);
        if (article) {
            getRepository(Article).merge(article, {...body, updated_at: new Date()})
            return await getRepository(Article).save(article);
        }
        return null
    },
    async deleteArticle(id: string | number) {
        if (!Number(id)) {
            throw null;
        }
        const article = await getRepository(Article).findOne(id);
        if (article) {
            return getRepository(Article).delete(id);
        }
        return null;
    }
})