import { Router } from 'express';
import {MatchController} from '../controllers/matchController.js';

const router = Router();

router.put("/:id", MatchController.addPetLike);

export default router;
