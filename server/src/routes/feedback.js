import { Router } from "express";
import {getAllFeedback,createFeedback} from "../controllers/feedbackController.js"

const router = Router();

router.post('/',createFeedback);
router.get('/',getAllFeedback)

export default router;