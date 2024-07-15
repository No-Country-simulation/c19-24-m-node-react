// routes/matchRoutes.js
import express from 'express';
import {
    createMatch,
    getMatches,
    getMatchById,
    deleteMatch,
} from '../controllers/matchController.js';

const router = express.Router();

router.post('/matches', createMatch); 
router.get('/matches', getMatches);
router.get('/matches/:id', getMatchById);
router.delete('/matches/:id', deleteMatch);

export default router;
