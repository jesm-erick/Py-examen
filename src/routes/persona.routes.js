import { Router } from "express";
const router = Router();
// module.export = router;
import * as personaCtrl from "../controllers/persona.controller";
router.get("/", personaCtrl.getPersona);

router.post("/", personaCtrl.crearPersona);


export default router;