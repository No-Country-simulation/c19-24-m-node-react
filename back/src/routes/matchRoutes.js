import { Router } from 'express';
import {MatchController} from '../controllers/matchController.js';

const router = Router();

router.put("/like/:id", MatchController.addPetLike);

router.put("/notlike/:id", MatchController.addPetNotLike);

export default router;
