import { Router } from "express";
import { get_produto, get_produtos, post_produto } from "../controllers/produto.controller";

const router = Router();

router.get(`/`, get_produtos);
router.get(`/:id`, get_produto);
router.post(`/`, post_produto);

export default router;