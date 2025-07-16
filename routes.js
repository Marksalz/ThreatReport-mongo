import { Router } from 'express'
import * as reportController from "./reportController.js";

const router = Router();

router.post('/reports', reportController.createReport);
router.get('/reports', reportController.getReports);
router.get('/reports/high', reportController.getHighReports);
router.put('/reports/:id/confirm', reportController.confirmReport);
router.delete('/reports/:id', reportController.deleteReport);

export default router;