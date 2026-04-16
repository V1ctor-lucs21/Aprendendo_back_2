import { Router } from 'express';
import { listarPets, buscarPetPorId, criarPet, remove_pet, atualizacao_completa, atualizacao_partes } from '../controllers/petController.js';
import { regrasValidacaoPet } from '../validators/petValidator.js';

const router = Router();

router.get('/', listarPets);
router.get('/:id', buscarPetPorId);
router.post('/', regrasValidacaoPet, criarPet);// A rota recebe o validador como middleware intermediário
router.put('/', atualizacao_completa)
router.patch('/',atualizacao_partes)
router.delete('/:id',remove_pet)

export default router;