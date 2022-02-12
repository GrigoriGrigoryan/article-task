import { body } from 'express-validator';

export const createArticleDto = [
    body('heading')
        .isString()
        .notEmpty()
        .withMessage('Not valid heading'),
    body('content')
        .isString()
        .notEmpty()
        .withMessage('Not valid content'),
    body('created_at')
        .isDate()
        .notEmpty()
        .withMessage('Not valid Date')
];

export const updateArticleDto = [
    body('heading')
        .isString()
        .optional()
        .withMessage('Not valid heading'),
    body('content')
        .isString()
        .optional()
        .withMessage('Not valid content'),
    body('updated_at')
        .isDate()
        .notEmpty()
        .withMessage('Not valid Date')
];