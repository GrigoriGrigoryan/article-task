import { body } from 'express-validator';

export const createArticleDto = [
    body('heading')
        .isString()
        .optional()
        .withMessage('Not valid heading'),
    body('content')
        .isString()
        .notEmpty()
        .withMessage('Not valid content'),
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
];