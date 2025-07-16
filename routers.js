import { Router } from 'express'
import { reportsDal } from "./DAL/reportsDal.js";

const router = Router();

router.post('/reports');
router.get('/reports');
router.get('/reports/high');
router.put('/reports/:id/confirm');
router.delete('/reports/:id');

export default router;