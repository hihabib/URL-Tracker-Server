import { Router } from 'express';
import * as url from '../controllers/url';

const router = Router();

// url url related routes
router.post("/api/v1/add-url", url.addUrl);

export default router;