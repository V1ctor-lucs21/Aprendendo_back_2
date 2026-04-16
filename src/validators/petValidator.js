import { body, validationResult } from 'express-validator';
import { verificarErros } from '../middlewares/validatorMiddleware';


// Regras para criação de um pet
export const regrasValidacaoPet = [
    body('nome')
        .trim()
        .notEmpty().withMessage('O nome é obrigatório')
        .isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres'),

    body('raça')
        .isLength({ max: 20 }).withMessage('A raça tem que ter no máximo 20 caracteres'),

    body('especie')
        .notEmpty().withMessage('A espécie é obrigatória')
        .isIn(['Cachorro', 'Gato', 'Ave']).withMessage('Espécie invalidam, tem que ser Cachorro,Ave ou Gato'),

    body('idade')
        .isInt({ min: 0 }).withMessage('A idade deve ser um número positivo'),





    // Middleware para capturar e enviar os erros
    verificarErros
];