import express from "express";

import {verifyUnit} from "../services/unit.service.js";

const router = express.Router();

router.get("/:id", async(req,res)=>{
    const result = await verifyUnit(req.params.id);
    res.json(result);
})

export default router;